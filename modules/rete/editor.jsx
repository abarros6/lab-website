import Rete from "rete";
import ReactRenderPlugin from "rete-react-render-plugin";
import ConnectionPlugin from "rete-connection-plugin";
import ContextMenuPlugin from "rete-context-menu-plugin";
import AreaPlugin from "rete-area-plugin";
import { MyNode } from "./Node";
import { MyControl } from "./Control";


var numSocket = new Rete.Socket("Number value");

class StartComponent extends Rete.Component {
  constructor() {
    super("Start");
  }

  builder(node){
    var out = new Rete.Output("out", "", numSocket, true);
    node.data.color = "#4D455D";
    node.data.borderColor = "black";
    return node.addOutput(out);
  }

  worker(node, inputs, outputs) {
    outputs["Input"] = node.data.num;
  }
}


class ActionComponent extends Rete.Component {
  constructor() {
    super("Action");
  }

  builder(node) {
    var inp = new Rete.Input("in", "VALUE", numSocket, true);
    var out = new Rete.Output("out", "", numSocket, true);

    var ctrl = new MyControl(this.editor, "Input", node.data.Input);

    node.data.color = "#2B3467";
    node.data.borderColor = "navy";


    return node.addInput(inp).addOutput(out).addControl(ctrl); //.addControl(ctrl2);
  }

  worker(node, inputs, outputs) {
    outputs["Input"] = node.data.Input;
  }
}

class ConditionComponent extends Rete.Component {
  constructor() {
    super("Condition");
  }

  builder(node) {
    var inp = new Rete.Input("in", "", numSocket, true);
    var out = new Rete.Output("out", "", numSocket, true);

    var ctrl = new MyControl(this.editor, "Input", node.data.Input);

    node.data.color = "#E96479";
    node.data.borderColor = "red";

    return node.addInput(inp).addOutput(out).addControl(ctrl); //.addControl(ctrl2);
  }

  worker(node, inputs, outputs) {
    outputs["Input"] = node.data.Input;
  }
}

class EndComponent extends Rete.Component {
  constructor() {
    super("End");
  }

  builder(node){
    var inp = new Rete.Input("in", "", numSocket, true);
    node.data.color = "#4D455D";
    node.data.borderColor = "black";
    return node.addInput(inp);
  }

  worker(node, inputs, outputs) {
    outputs["Input"] = node.data.num;
  }
}

export default async function Editor(container) {
  console.log(container);
  var components = [new StartComponent(), new ActionComponent(), new ConditionComponent(), new EndComponent()];

  var editor = new Rete.NodeEditor("demo@0.1.0", container);
  editor.use(ConnectionPlugin);
  editor.use(ReactRenderPlugin, {
    component: MyNode,
  });
  editor.use(ContextMenuPlugin);

  var engine = new Rete.Engine("demo@0.1.0");

  components.map((c) => {
    editor.register(c);
    engine.register(c);
  });

  var n1 = await (new StartComponent()).createNode();
  var n2 = await (new EndComponent()).createNode();
  n1.position = [80, 200];
  n2.position = [850, 200];
  

  editor.addNode(n1);
  editor.addNode(n2);
  

  editor.on("nodecreated", async (node) => {
    console.log("nodecreated");
    console.log(node.id);
    await engine.abort();
    await engine.process(editor.toJSON());
  });
  editor.on("noderemoved", async (node) => {
    console.log("noderemoved");
    console.log(node.id);
    await engine.abort();
    await engine.process(editor.toJSON());
  });

  editor.on("process", async () => {
    console.log("process");
    await engine.abort();
    await engine.process(editor.toJSON());
  });

  editor.on("nodeselected", async (node) => {
    console.log("nodeselected");
    console.log(node.id);

    await engine.abort();
    await engine.process(editor.toJSON());
  });

  editor.view.resize();
  AreaPlugin.zoomAt(editor);
  editor.trigger("process");
}
