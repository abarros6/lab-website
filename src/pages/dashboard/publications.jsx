import Head from 'next/head'
import Dashboard from '@/components/ProjectDashboard'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import PublicationsLayout from '@/components/PublicationsLayout'

const ribaupierre_Publications = [
  {
    year: '',
    title: 'Current concepts and management of glioblastoma',
    body: 'M Preusser, S De Ribaupierre, A W\u00f6hrer, SC Erridge, M Hegi, M Weller, ... Annals of neurology 70 (1), 9-21',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:qxL8FJ1GzNcC',
  },
  {
    year: '2011',
    title:
      'Subependymal giant-cell astrocytomasin pediatric tuberous sclerosis disease: when should we operate?',
    body: 'S de Ribaupierre, G Dorfm\u00fcller, C Bulteau, M Fohlen, JM Pinard, ... Neurosurgery 60 (1), 83-90',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:u5HHmVD_uO8C',
  },
  {
    year: '2007',
    title:
      'Measuring cognitive load: performance, mental effort and simulation task complexity',
    body: 'FA Haji, D Rojas, R Childs, S de Ribaupierre, A Dubrowski Medical education 49 (8), 815-827',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:35r97b3x0nAC',
  },
  {
    year: '2015',
    title:
      'Third ventriculostomy vs ventriculoperitoneal shunt in pediatric obstructive hydrocephalus: results from a Swiss series and literature review',
    body: "S de Ribaupierre, B Rilliet, O Vernet, L Regli, JG Villemure Child's Nervous System 23 (5), 527-533",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:u-x6o8ySG0sC',
  },
  {
    year: '2007',
    title: 'Hemispherotomy and other disconnective techniques',
    body: 'S De Ribaupierre, O Delalande Neurosurgical focus 25 (3), E14',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:d1gkVwhDpl0C',
  },
  {
    year: '2008',
    title:
      'Healthcare training enhancement through virtual reality and serious games',
    body: 'S Ribaupierre, B Kapralos, F Haji, E Stroulia, A Dubrowski, R Eagleson Virtual, augmented reality and serious games for healthcare 1, 9-27',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:2P1L_qKh6hAC',
  },
  {
    year: '2014',
    title:
      'Evaluation of neuroanatomical training using a 3D visual reality model.',
    body: 'DN Brewer, TD Wilson, R Eagleson, S De Ribaupierre MMVR, 85-91',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:kNdYIx-mwKoC',
  },
  {
    year: '2012',
    title:
      'Training for planning tumour resection: augmented reality and human factors',
    body: 'K Abhari, JSH Baxter, ECS Chen, AR Khan, TM Peters, S De Ribaupierre, ... IEEE Transactions on Biomedical Engineering 62 (6), 1466-1477',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:zA6iFVUQeVQC',
  },
  {
    year: '2014',
    title:
      'Thrive or overload? The effect of task complexity on novices\u2019 simulation\u2010based learning',
    body: 'FA Haji, JJH Cheung, N Woods, G Regehr, S de Ribaupierre, ... Medical education 50 (9), 955-968',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:evX43VCCuoAC',
  },
  {
    year: '2016',
    title:
      'Evaluation of an online three\u2010dimensional interactive resource for undergraduate neuroanatomy education',
    body: 'LK Allen, R Eagleson, S de Ribaupierre Anatomical sciences education 9 (5), 431-439',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:4fKUyHm3Qg0C',
  },
  {
    year: '2016',
    title:
      'In vivo MRI signatures of hippocampal subfield pathology in intractable epilepsy',
    body: 'M Goubran, BC Bernhardt, D Cantor\u2010Rivera, JC Lau, C Blinston, ... Human brain mapping 37 (3), 1103-1119',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:08ZZubdj9fEC',
  },
  {
    year: '2016',
    title:
      '133Xe SPECT cerebral blood flow study in a healthy population: determination of T-scores',
    body: 'DO Slosman, C Chicherio, C Ludwig, L Genton, S De Ribaupierre, ... Journal of Nuclear Medicine 42 (6), 864-870',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:4DMP91E08xMC',
  },
  {
    year: '2001',
    title:
      'Posterior positional plagiocephaly treated with cranial remodeling orthosis.',
    body: 'S De Ribaupierre, O Vernet, B Rilliet, B Cavin, D Kalina Swiss medical weekly 137 (25-26), 368-372',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:UeHWp8X0CEIC',
  },
  {
    year: '2007',
    title:
      'Automatic segmentation approach to extracting neonatal cerebral ventricles from 3D ultrasound images',
    body: 'W Qiu, Y Chen, J Kishimoto, S de Ribaupierre, B Chiu, A Fenster, J Yuan Medical image analysis 35, 181-191',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:q3oQSFYPqjQC',
  },
  {
    year: '2017',
    title:
      "Listeria brain abscess, Pneumocystis pneumonia and Kaposi's sarcoma after temozolomide",
    body: 'V Gani\u00e8re, G Christen, F Bally, L Guillou, A Pica, S De Ribaupierre, ... Nature Clinical Practice Oncology 3 (6), 339-343',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:aqlVkmm33-oC',
  },
  {
    year: '2006',
    title:
      'Needs assessment for simulation training in neuroendoscopy: a Canadian national survey',
    body: 'FA Haji, A Dubrowski, J Drake, S de Ribaupierre Journal of Neurosurgery 118 (2), 250-257',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:R3hNpaxXUhUC',
  },
  {
    year: '2013',
    title:
      'Cerebellar lesions: is there a lateralisation effect on memory deficits?',
    body: 'S De Ribaupierre, C Ryser, JG Villemure, S Clarke Acta neurochirurgica 150 (6), 545-550',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:2osOgNQ5qMEC',
  },
  {
    year: '2008',
    title:
      'Presurgical language mapping in children with epilepsy: clinical usefulness of functional magnetic resonance imaging for the planning of cortical stimulation',
    body: 'S de Ribaupierre, M Fohlen, C Bulteau, G Dorfm\u00fcller, O Delalande, ... Epilepsia 53 (1), 67-78',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:Zph67rFs4hoC',
  },
  {
    year: '2012',
    title: 'The role of posterior fossa decompression in acute cerebellitis',
    body: "S De Ribaupierre, K Meagher-Villemure, JG Villemure, J Cotting, ... Child's Nervous System 21 (11), 970-974",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:4JMBOYKVnBMC',
  },
  {
    year: '2005',
    title:
      'Investigation of hippocampal substructures in focal temporal lobe epilepsy with and without hippocampal sclerosis at 7T',
    body: 'BG Santyr, M Goubran, JC Lau, BYM Kwan, F Salehi, DH Lee, ... Journal of Magnetic Resonance Imaging 45 (5), 1359-1370',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&citation_for_view=yXssN6MAAAAJ:_Re3VWB3Y0AC',
  },
  {
    year: '2017',
    title:
      '3D ultrasound system to investigate intraventricular hemorrhage in preterm neonates',
    body: 'J Kishimoto, S De Ribaupierre, DSC Lee, R Mehta, K St Lawrence, ... Physics in Medicine & Biology 58 (21), 7513',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:NMxIlDl6LWMC',
  },
  {
    year: '2013',
    title:
      'Image registration of ex-vivo MRI to sparsely sectioned histology of hippocampal and neocortical temporal lobe specimens',
    body: 'M Goubran, C Crukley, S de Ribaupierre, TM Peters, AR Khan Neuroimage 83, 770-781',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:JV2RwH3_ST0C',
  },
  {
    year: '2013',
    title:
      'Measuring cognitive load during simulation-based psychomotor skills training: sensitivity of secondary-task performance and subjective ratings',
    body: 'FA Haji, R Khan, G Regehr, J Drake, S de Ribaupierre, A Dubrowski Advances in Health Sciences Education 20 (5), 1237-1253',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:EUQCXRtRnyEC',
  },
  {
    year: '2015',
    title:
      'Registration of in-vivo to ex-vivo MRI of surgically resected specimens: a pipeline for histology to in-vivo registration',
    body: 'M Goubran, S de Ribaupierre, RR Hammond, C Currie, JG Burneo, ... Journal of neuroscience methods 241, 53-65',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:3s1wT3WcHBgC',
  },
  {
    year: '2015',
    title:
      'Frontosphenoidal synostosis: a rare cause of unilateral anterior plagiocephaly',
    body: "S de Ribaupierre, A Czorny, B Pittet, B Jacques, B Rilliet Child's Nervous System 23 (12), 1431-1438",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:IjCSPb-OGe4C',
  },
  {
    year: '2007',
    title:
      'Overlapping neural circuits for visual attention and eye movements in the human cerebellum',
    body: 'CL Striemer, PA Chouinard, MA Goodale, S De Ribaupierre Neuropsychologia 69, 9-21',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:a0OBvERweLwC',
  },
  {
    year: '2015',
    title:
      'Negative neurofunctional effects of frequency, depth and environment in recreational scuba diving: the Geneva \u201cmemory dive\u201d study',
    body: 'DO Slosman, S De Ribaupierre, C Chicherio, C Ludwig, ML Montandon, ... British journal of sports medicine 38 (2), 108-114',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:Wp0gIr-vW9MC',
  },
  {
    year: '2004',
    title: 'Motion magnification for endoscopic surgery',
    body: 'AJ McLeod, JSH Baxter, S de Ribaupierre, TM Peters Medical Imaging 2014: Image-Guided Procedures, Robotic Interventions, and \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:J_g5lzvAfSwC',
  },
  {
    year: '2014',
    title:
      'User-guided segmentation of preterm neonate ventricular system from 3-D ultrasound images using convex optimization',
    body: 'W Qiu, J Yuan, J Kishimoto, J McLeod, Y Chen, S de Ribaupierre, ... Ultrasound in medicine & biology 41 (2), 542-556',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:rO6llkc54NcC',
  },
  {
    year: '2015',
    title:
      'Magnetic resonance imaging and histology correlation in the neocortex in temporal lobe epilepsy',
    body: 'M Goubran, RR Hammond, S de Ribaupierre, JG Burneo, S Mirsattari, ... Annals of neurology 77 (2), 237-250',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:ZHo1McVdvXMC',
  },
  {
    year: '2015',
    title:
      'Construction of a 3-D anatomical model for teaching temporal lobectomy',
    body: 'S de Ribaupierre, TD Wilson Computers in Biology and Medicine 42 (6), 692-696',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:8k81kl-MbHgC',
  },
  {
    year: '2012',
    title:
      'A 10-year experience in paediatric spontaneous cerebral hemorrhage: which children with headache need more than a clinical examination?',
    body: 'S de Ribaupierre, B Rilliet, J Cotting, L Regli Swiss Medical Weekly 138 (5-6), 59-69',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:9yKSN-GCB0IC',
  },
  {
    year: '2008',
    title:
      'Cognitive intraindividual variability and white matter integrity in aging',
    body: 'N Mella, S de Ribaupierre, R Eagleson, A De Ribaupierre The Scientific World Journal 2013',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:M3NEmzRMIkIC',
  },
  {
    year: '2013',
    title:
      'Functional magnetic resonance imaging for language mapping in temporal lobe epilepsy',
    body: 'A Wang, TM Peters, S de Ribaupierre, SM Mirsattari Epilepsy research and treatment 2012',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:_kc_bZDykSQC',
  },
  {
    year: '2012',
    title:
      '3D MR ventricle segmentation in pre-term infants with post-hemorrhagic ventricle dilatation (PHVD) using multi-phase geodesic level-sets',
    body: 'W Qiu, J Yuan, M Rajchl, J Kishimoto, Y Chen, S de Ribaupierre, B Chiu, ... Neuroimage 118, 13-25',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:u9iWguZQMMsC',
  },
  {
    year: '2015',
    title:
      'Evaluation of a mobile augmented reality application for image guidance of neurosurgical interventions',
    body: 'M Kramers, R Armstrong, SM Bakhshmand, A Fenster, S de Ribaupierre, ... Medicine Meets Virtual Reality 21, 204-208',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:RGFaLdJalmkC',
  },
  {
    year: '2014',
    title:
      'Vertebroplasty performance on simulator for 19 surgeons using hierarchical task analysis',
    body: 'P Wucherer, P Stefan, K Abhari, P Fallavollita, M Weigl, M Lazarovici, ... IEEE transactions on medical imaging 34 (8), 1730-1737',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:OU6Ihb5iCvQC',
  },
  {
    year: '2015',
    title:
      'Quantitative relaxometry and diffusion MRI for lateralization in MTS and non-MTS temporal lobe epilepsy',
    body: 'AR Khan, M Goubran, S de Ribaupierre, RR Hammond, JG Burneo, ... Epilepsy research 108 (3), 506-516',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:O3NaXMp0MMsC',
  },
  {
    year: '2014',
    title:
      'Design and evaluation of an augmented reality simulator using leap motion',
    body: 'T Wright, S de Ribaupierre, R Eagleson Healthcare technology letters 4 (5), 210-215',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:5awf1xo2G04C',
  },
  {
    year: '2017',
    title:
      'In vivo validation of a 3-D ultrasound system for imaging the lateral ventricles of neonates',
    body: 'J Kishimoto, A Fenster, DSC Lee, S de Ribaupierre Ultrasound in medicine & biology 42 (4), 971-979',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:RYcK_YlVTxYC',
  },
  {
    year: '2016',
    title:
      'The role of augmented reality in training the planning of brain tumor resection',
    body: 'K Abhari, JSH Baxter, ES Chen, AR Khan, C Wedlake, T Peters, ... Augmented reality environments for medical imaging and computer-assisted \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:hMod-77fHWUC',
  },
  {
    year: '2013',
    title:
      'An interactive program to conceptualize the anatomy of the internal brainstem in 3D',
    body: 'K Pedersen, TD Wilson, S De Ribaupierre Medicine Meets Virtual Reality 20, 319-323',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:_Qo2XoVZTnwC',
  },
  {
    year: '2013',
    title:
      'OR 2.0 Context-aware Operating Theaters, Computer Assisted Robotic Endoscopy, Clinical Image-based Procedures, and Skin Image Analysis: First International Workshop, OR 2.0 \u2026',
    body: 'D Stoyanov, Z Taylor, D Sarikaya, J McLeod, MAG Ballester, NCF Codella, ... Springer',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:nrtMV_XWKgEC',
  },
  {
    year: '2018',
    title: 'Neurosurgical management of frontal lobe epilepsy in children',
    body: 'S Vachhrajani, S De Ribaupierre, H Otsubo, A Ochi, SK Weiss, EJ Donner, ... Journal of Neurosurgery: Pediatrics 10 (3), 206-216',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:ufrVoPGSRksC',
  },
  {
    year: '2012',
    title:
      'Language mapping in temporal lobe epilepsy in children: special considerations',
    body: 'S de Ribaupierre, A Wang, S Hayman-Abello Epilepsy research and treatment 2012',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:LkGwnXOMwfcC',
  },
  {
    year: '2012',
    title:
      'Challenges for the usability of AR and VR for clinical neurosurgical procedures',
    body: 'S de Ribaupierre, R Eagleson Healthcare Technology Letters 4 (5), 151-151',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:PR6Y55bgFSsC',
  },
  {
    year: '2017',
    title:
      'Operationalising elaboration theory for simulation instruction design: a Delphi study',
    body: 'FA Haji, R Khan, G Regehr, G Ng, S de Ribaupierre, A Dubrowski Medical education 49 (6), 576-588',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:tzM49s52ZIMC',
  },
  {
    year: '2015',
    title:
      'Teaching for the transition: the Canadian PGY-1 neurosurgery \u2018Rookie Camp\u2019',
    body: 'FA Haji, DB Clarke, MC Matte, DM Brandman, S Brien, S de Ribaupierre, ... Canadian Journal of Neurological Sciences 42 (1), 25-33',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:fPk4N6BV_jEC',
  },
  {
    year: '2015',
    title: 'VR and AR simulator for neurosurgical training',
    body: 'S de Ribaupierre, R Armstrong, D Noltie, M Kramers, R Eagleson 2015 IEEE Virtual Reality (VR), 147-148',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:XiSMed-E-HIC',
  },
  {
    year: '2015',
    title:
      'Blister-like supraclinoid internal carotid artery pseudoaneurysm in a 15-year-old male: case report and review of the literature',
    body: 'FA Haji, MR Boulton, S De Ribaupierre Pediatric neurosurgery 47 (6), 449-454',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:P5F9QuxV20EC',
  },
  {
    year: '2011',
    title:
      'Traitement des plagioc\u00e9phalies post\u00e9rieures d\u2019origine positionnelle',
    body: 'O Vernet, S de Ribaupierre, B Cavin, B Rilliet Archives de p\u00e9diatrie 15 (12), 1829-1833',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:UebtZRa9Y70C',
  },
  {
    year: '2008',
    title:
      'Cervical Nerve Root Synovial Sarcoma in a Child with Chromosomal (X; 18) Translocation',
    body: 'S de Ribaupierre, O Vernet, M Beck-Popovic, K Meagher-Villemure, ... Pediatric neurosurgery 43 (5), 382-385',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:zYLM7Y9cAGgC',
  },
  {
    year: '2007',
    title:
      'Does ventricular volume affect the neurodevelopmental outcome in infants with intraventricular hemorrhage?',
    body: "M Lo, J Kishimoto, R Eagleson, S Bhattacharya, S De Ribaupierre Child's Nervous System 36 (3), 569-575",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:zLWjf1WUPmwC',
  },
  {
    year: '2020',
    title:
      'Moderating effect of cortical thickness on BOLD signal variability age-related changes',
    body: 'DR Pur, RA Eagleson, A De Ribaupierre, N Mella, S de Ribaupierre Frontiers in Aging Neuroscience 11, 46',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:0KyAp5RtaNEC',
  },
  {
    year: '2019',
    title:
      'Realism, criterion validity, and training capability of simulated diagnostic cerebral angiography.',
    body: 'N Nguyen, R Eagleson, M Boulton, S de Ribaupierre MMVR, 297-303',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:35N4QoGY0k4C',
  },
  {
    year: '2014',
    title: 'Hybrid simulation of brain\u2013skull growth',
    body: 'J Jin, S Shahbazi, J Lloyd, S Fels, S De Ribaupierre, R Eagleson Simulation 90 (1), 3-10',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:GnPB-g6toBAC',
  },
  {
    year: '2014',
    title: 'Meningeal solitary fibrous tumour in a child',
    body: "S de Ribaupierre, K Meagher-Villemure, S Agazzi, B Rilliet Child's Nervous System 22 (6), 619-622",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:qjMakFHDy7sC',
  },
  {
    year: '2006',
    title:
      'Treatment of abdominal pseudocysts and associated ventricuoperitoneal shunt failure',
    body: "E Dzongowski, K Coriolano, S de Ribaupierre, SA Jones Child's Nervous System 33 (12), 2087-2093",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:VL0QpB8kHFEC',
  },
  {
    year: '2017',
    title:
      'Development of augmented reality training simulator systems for neurosurgery using model-driven software engineering',
    body: 'H Ghandorh, J Mackenzie, R Eagleson, S de Ribaupierre 2017 IEEE 30th Canadian Conference on Electrical and Computer Engineering \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:_B80troHkn4C',
  },
  {
    year: '2017',
    title:
      'A mobile augmented reality application for image guidance of neurosurgical interventions',
    body: 'M Kramers, R Armstrong, SM Bakhshmand, A Fenster, S de Ribaupierre, ... American Journal of Biomedical Engineering 3 (6), 169-174',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:YFjsv_pBGBYC',
  },
  {
    year: '2013',
    title:
      'Orbitotemporal facial involvement in type 1 neurofibromatosis (NF1)',
    body: 'B Rilliet, B Pittet, D Montandon, AP Narata, S de Ribaupierre, F Schils, ... Neuro-chirurgie 56 (2-3), 257-270',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:W7OEmFMy1HYC',
  },
  {
    year: '2010',
    title:
      'Perfusion and metabolic neuromonitoring during ventricular taps in infants with post-hemorrhagic ventricular dilatation',
    body: 'A Rajaram, L Yip, D Milej, M Suwalski, M Kewin, M Lo, JJL Carson, V Han, ... Brain Sciences 10 (7), 452',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:hMsQuOkrut0C',
  },
  {
    year: '2020',
    title:
      'Investigating the effects of cerebrospinal fluid removal on cerebral blood flow and oxidative metabolism in infants with post-hemorrhagic ventricular dilatation',
    body: 'PJ McLachlan, J Kishimoto, M Diop, D Milej, DSC Lee, S De Ribaupierre, ... Pediatric Research 82 (4), 634-641',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:AXPGKjj_ei8C',
  },
  {
    year: '2017',
    title:
      'Development of a Web-Based 3D Module for Enhanced Neuroanatomy Education.',
    body: 'LK Allen, HZ Ren, R Eagleson, S de Ribaupierre MMVR 220, 5-8',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:geHnlv5EZngC',
  },
  {
    year: '2016',
    title:
      'Quantitative 3-D head ultrasound measurements of ventricle volume to determine thresholds for preterm neonates requiring interventional therapies following posthemorrhagic \u2026',
    body: 'J Kishimoto, A Fenster, DSC Lee, S de Ribaupierre Journal of Medical Imaging 5 (2), 026001',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:fEOibwPWpKIC',
  },
  {
    year: '2018',
    title:
      'Preterm neonatal lateral ventricle volume from three-dimensional ultrasound is not strongly correlated to two-dimensional ultrasound measurements',
    body: 'J Kishimoto, S de Ribaupierre, F Salehi, W Romano, DSC Lee, A Fenster Journal of Medical Imaging 3 (4), 046003',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:J-pR_7NvFogC',
  },
  {
    year: '2016',
    title:
      'Visual enhancement of MR angiography images to facilitate planning of arteriovenous malformation interventions',
    body: 'K Abhari, JSH Baxter, AR Khan, TM Peters, SD Ribaupierre, R Eagleson ACM Transactions on Applied Perception (TAP) 12 (1), 1-15',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:VOx2b1Wkg3QC',
  },
  {
    year: '2015',
    title:
      'Unusual presentation of Chiari I in toddlers: case reports and review of the literature',
    body: "CL Carew, A Prasad, KY Tay, S de Ribaupierre Child's Nervous System 28 (11), 1965-1970",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:KlAtU1dfN6UC',
  },
  {
    year: '2012',
    title:
      'Vagus nerve stimulation in patients with therapy-resistant generalized epilepsy',
    body: 'AS Marti, SM Mirsattari, K MacDougall, DA Steven, A Parrent, ... Epilepsy & Behavior 111, 107253',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:ILKRHgRFtOwC',
  },
  {
    year: '2020',
    title:
      'Longitudinal analysis of pre-term neonatal cerebral ventricles from 3D ultrasound images using spatial-temporal deformable registration',
    body: 'W Qiu, Y Chen, J Kishimoto, S De Ribaupierre, B Chiu, A Fenster, IEEE Transactions on Medical Imaging 36 (4), 1016-1026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:XiVPGOgt02cC',
  },
  {
    year: '2016',
    title: 'Spatial ability and training in virtual neuroanatomy',
    body: 'L Plumley, R Armstrong, S De Ribaupierre, R Eagleson Medicine Meets Virtual Reality 20, 324-329',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:e5wmG9Sq2KIC',
  },
  {
    year: '2013',
    title: 'Medical education through virtual worlds: the HLTHSIM project',
    body: 'R Eagleson, S de Ribaupierre, S King, E Stroulia Medicine Meets Virtual Reality 18, 180-184',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:YsMSGLbcyi4C',
  },
  {
    year: '2011',
    title:
      'Intrathecal baclofen and pregnancy: implications for clinical care.',
    body: 'M DeVries-Rizzo, D Warren, G Delaney, S Levin, C Campbell, ... Canadian journal of neuroscience nursing 31 (3), 21',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:HDshCWvjkbEC',
  },
  {
    year: '2009',
    title:
      'Contralateral frontal and cerebellar haemorrhages after peri-insular hemispherotomy',
    body: 'S De Ribaupierre, JG Villemure, M Chalaron, J Cotting, C Pollo Acta Neurochirurgica 146 (7), 743',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:Y0pCki6q_DkC',
  },
  {
    year: '2004',
    title: 'Treatment of posterior positional plagiocephaly',
    body: 'O Vernet, S de Ribaupierre, B Cavin, B Rilliet Archives de Pediatrie: Organe Officiel de la Societe Francaise de Pediatrie \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:eQOLeE2rZwMC',
  },
  {
    year: '2008',
    title:
      'Augmented reality for neurosurgical guidance: an objective comparison of planning interface modalities',
    body: 'R Armstrong, T Wright, S Ribaupierre, R Eagleson International Conference on Medical Imaging and Augmented Reality, 233-243',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:mvPsJ3kp5DgC',
  },
  {
    year: '2016',
    title:
      'Semi-automatic segmentation of preterm neonate ventricle system from 3D ultrasound images',
    body: 'W Qiu, J Yuan, J Kishimoto, S de Ribaupierre, E Ukwatta, A Fenster 2014 IEEE 11th International Symposium on Biomedical Imaging (ISBI), 1222-1225',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:g5m5HwL7SMYC',
  },
  {
    year: '2014',
    title:
      'A software system for evaluation and training of spatial reasoning and neuroanatomical knowledge in a virtual environment',
    body: 'R Armstrong, S de Ribaupierre, R Eagleson Computer methods and programs in biomedicine 114 (1), 29-37',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:ns9cj8rnVeAC',
  },
  {
    year: '2014',
    title:
      'Development of a 3D ultrasound system to investigate post-hemorrhagic hydrocephalus in pre-term neonates',
    body: 'J Kishimoto, D Lee, KS Lawrence, W Romano, A Fenster, ... Medical Imaging 2013: Ultrasonic Imaging, Tomography, and Therapy 8675, 430-435',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:r0BpntZqJG4C',
  },
  {
    year: '2013',
    title:
      'Use of a mixed-reality system to improve the planning of brain tumour resections: preliminary results',
    body: 'K Abhari, JSH Baxter, ES Chen, AR Khan, C Wedlake, TM Peters, ... Workshop on Augmented Environments for Computer-Assisted Interventions, 55-66',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:iH-uZ7U-co4C',
  },
  {
    year: '2012',
    title: 'Trauma and impaired consciousness',
    body: 'S de Ribaupierre Neurologic clinics 29 (4), 883-902',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:0EnyYjriUFMC',
  },
  {
    year: '2011',
    title:
      'Phacomatosis and genetically determined tumors: the transition from childhood to adulthood',
    body: 'S De Ribaupierre, O Vernet, M Vinchon, B Rilliet Neuro-chirurgie 54 (5), 642-653',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:Tyk-4Ss8FVUC',
  },
  {
    year: '2008',
    title:
      'A 10-year experience in paediatric spontaneous cerebral haemorrhage: Which children with headache need more than a clinical examination?',
    body: 'S Ribaupierre, B Rilliet, J Cotting, L Regli Swiss Medical Weekly 138 (5), 59',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:t6usbXjVLHcC',
  },
  {
    year: '2008',
    title:
      'Cranial and ventricular size following shunting or endoscopic third ventriculostomy (ETV) in infants with aqueductal stenosis: further insights from the International Infant \u2026',
    body: "IC Coulter, AV Kulkarni, S Sgouros, S Constantini, Y Leitner, JRW Kestle, ... Child's Nervous System 36 (7), 1407-1414",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:4MWp96NkSFoC',
  },
  {
    year: '2020',
    title:
      'Leap motion performance in an augmented reality workspace: Integrating devices with an interactive platform',
    body: 'T Wright, S de Ribaupierre, R Eagleson IEEE Consumer Electronics Magazine 8 (1), 36-41',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:9Nmd_mFXekcC',
  },
  {
    year: '2018',
    title:
      'MultiXplore: Visual exploration platform for multimodal neuroimaging data',
    body: 'SM Bakhshmand, AR Khan, S de Ribaupierre, R Eagleson Journal of neuroscience methods 290, 1-12',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:N5tVd3kTz84C',
  },
  {
    year: '2017',
    title:
      'Longitudinal analysis of pre-term neonatal brain ventricle in ultrasound images based on convex optimization',
    body: 'W Qiu, J Yuan, J Kishimoto, Y Chen, M Rajchl, E Ukwatta, S Ribaupierre, ... International Conference on Medical Image Computing and Computer-Assisted \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:738O_yMBCRsC',
  },
  {
    year: '2015',
    title:
      'Patient-specific pipeline to create virtual endoscopic third ventriculostomy scenarios',
    body: 'R Armstrong, R Eagleson, S De Ribaupierre Medicine Meets Virtual Reality 21, 14-16',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:NaGl4SEjCO4C',
  },
  {
    year: '2014',
    title:
      'Robust registration of sparsely sectioned histology to ex-vivo MRI of temporal lobe resections',
    body: 'M Goubran, AR Khan, C Crukley, S Buchanan, B Santyr, S deRibaupierre, ... Medical Imaging 2012: Image Processing 8314, 558-565',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:9vf0nzSNQJEC',
  },
  {
    year: '2012',
    title: 'Accidents vasculairesc\u00e9r\u00e9braux',
    body: 'Y El Hassani, S De Ribaupierre, A Sajadi Rev Med Suisse 6, 401-7',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:vRqMK49ujn8C',
  },
  {
    year: '2010',
    title:
      'Automatic deep learning-based segmentation of neonatal cerebral ventricles from 3D ultrasound images',
    body: 'Z Szentimrey, S de Ribaupierre, A Fenster, E Ukwatta Medical Imaging 2021: Biomedical Applications in Molecular, Structural, and \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:tuHXwOkdijsC',
  },
  {
    year: '2021',
    title:
      'Multimodal connectivity based eloquence score computation and visualisation for computer-aided neurosurgical path planning',
    body: 'SM Bakhshmand, R Eagleson, S de Ribaupierre Healthcare Technology Letters 4 (5), 152-156',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:WqliGbK-hY8C',
  },
  {
    year: '2017',
    title:
      'A framework for quantification and visualization of segmentation accuracy and variability in 3D lateral ventricle ultrasound images of preterm neonates',
    body: 'Y Chen, W Qiu, J Kishimoto, Y Gao, RHM Chan, S De Ribaupierre, ... Medical Physics 42 (11), 6387-6405',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:K3LRdlH-MEoC',
  },
  {
    year: '2015',
    title:
      'Automatic 3D US Brain Ventricle Segmentation in Pre-Term Neonates Using Multi-phase Geodesic Level-Sets with Shape Prior',
    body: 'W Qiu, J Yuan, J Kishimoto, Y Chen, M Rajchl, E Ukwatta, S Ribaupierre, ... International Conference on Medical Image Computing and Computer-Assisted \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:WbkHhVStYXYC',
  },
  {
    year: '2015',
    title:
      'Pituitary abscess: review and highlight of a case mimicking pituitary apoplexy',
    body: 'GH St-Pierre, S de Ribaupierre, BW Rotenberg, C Benson Canadian journal of neurological sciences 40 (5), 743-745',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:BqipwSGYUEgC',
  },
  {
    year: '2013',
    title:
      'Perceptual enhancement of arteriovenous malformation in MRI angiography displays',
    body: 'K Abhari, JSH Baxter, R Eagleson, T Peters, S De Ribaupierre Medical imaging 2012: image perception, observer performance, and technology \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:j3f4tGmQtD8C',
  },
  {
    year: '2012',
    title:
      'Automated 3D U-Net Based Segmentation of Neonatal Cerebral Ventricles from 3D Ultrasound Images',
    body: 'Z Szentimrey, S de Ribaupierre, A Fenster, E Ukwatta Submitt. to Med. Phys',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:S16KYo8Pm5AC',
  },
  {
    year: '2021',
    title: 'Fetal response to a maternal internal auditory stimulus',
    body: 'E Goldberg, CA McKenzie, B de Vrijer, R Eagleson, S de Ribaupierre Journal of Magnetic Resonance Imaging 52 (1), 139-145',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:ML0RJ9NH7IQC',
  },
  {
    year: '2020',
    title:
      'Automated registration and stitching of multiple 3D ultrasound images for monitoring neonatal intraventricular hemorrhage',
    body: 'A Harris, S de Ribaupierre, L Gardi, A Fenster, J Kishimoto Medical Imaging 2018: Ultrasonic Imaging and Tomography 10580, 1058017',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:Fu2w8maKXqMC',
  },
  {
    year: '2018',
    title:
      'Evaluating affordable cranial ultrasonography in East African neonatal intensive care units',
    body: 'DE Clay, AC Linke, DJ Cameron, B Stojanoski, S Rulisa, A Wasunna, ... Ultrasound in Medicine & Biology 43 (1), 119-128',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=20&pagesize=80&citation_for_view=yXssN6MAAAAJ:1qzjygNMrQYC',
  },
  {
    year: '2017',
    title:
      'Quantitative head ultrasound measurements to determine thresholds for preterm neonates requiring interventional therapies following intraventricular hemorrhage',
    body: 'J Kishimoto, A Fenster, F Salehi, W Romano, DSC Lee, S de Ribaupierre Medical Imaging 2016: Ultrasonic Imaging and Tomography 9790, 97900S',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:B3FOqHPlNUQC',
  },
  {
    year: '2016',
    title:
      'Evaluation of User Performance in Simulation-Based Diagnostic Cerebral Angiography Training.',
    body: 'O Zaika, N Nguyen, M Boulton, R Eagleson, S de Ribaupierre MMVR, 465-468',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:fQNAKQ3IYiAC',
  },
  {
    year: '2016',
    title: 'Collaborative table-top VR display for neurosurgical planning',
    body: 'R Eagleson, P Wucherer, P Stefan, Y Duschko, S de Ribaupierre, ... 2015 IEEE Virtual Reality (VR), 169-170',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:Tiz5es2fbqcC',
  },
  {
    year: '2015',
    title:
      'Characterization of neonatal patients with intraventricular hemorrhage using 3D ultrasound cerebral ventricle volumes',
    body: 'J Kishimoto, A Fenster, DSC Lee, MD Sandrine de Ribaupierre Medical Imaging 2015: Ultrasonic Imaging and Tomography 9419, 17-23',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:NhqRSupF_l8C',
  },
  {
    year: '2015',
    title:
      'Quantification of cerebral ventricle volume change of preterm neonates using 3D ultrasound images',
    body: 'Y Chen, J Kishimoto, W Qiu, MD Sandrine de Ribaupierre, A Fenster, ... Medical Imaging 2015: Ultrasonic Imaging and Tomography 9419, 94190V',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:abG-DnoFyZgC',
  },
  {
    year: '2015',
    title:
      'Cerebral Ventricle Segmentation from 3D Pre-term IVH Neonate MR Images Using Atlas-Based Convex Optimization',
    body: 'W Qiu, J Yuan, M Rajchl, J Kishimoto, E Ukwatta, S Ribaupierre, ... International Workshop on Computer-Assisted and Robotic Endoscopy, 46-54',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:HoB7MX3m0LUC',
  },
  {
    year: '2014',
    title:
      'Does stereo-endoscopy improve neurosurgical targeting in 3rd ventriculostomy?',
    body: 'K Abhari, S De Ribaupierre, T Peters, R Eagleson Medical Imaging 2011: Image Perception, Observer Performance, and Technology \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:MXK_kJrjxJIC',
  },
  {
    year: '2011',
    title:
      'Phacomatoses et tumeurs g\u00e9n\u00e9tiquement d\u00e9termin\u00e9es: la transition enfant\u2013adulte',
    body: 'S De Ribaupierre, O Vernet, M Vinchon, B Rilliet Neurochirurgie 54 (5), 642-653',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:M3ejUd6NZC8C',
  },
  {
    year: '2008',
    title:
      'Presurgical brain mapping of the language network in pediatric patients with epilepsy using resting-state fMRI',
    body: 'DR Pur, R Eagleson, M Lo, MT Jurkiewicz, A Andrade, S de Ribaupierre Journal of Neurosurgery: Pediatrics 27 (3), 259-268',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:tYavs44e6CUC',
  },
  {
    year: '2021',
    title: 'Does the Head Position Affect Neonatal Lateral Ventricular Volume?',
    body: 'P Roy, M Lo, S Bhattacharya, R Eagleson, A Fenster, S de Ribaupierre American journal of perinatology 29',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:KUbvn5osdkgC',
  },
  {
    year: '2020',
    title:
      "An Investigation of Head Motion and Perceptual Motion Cues' Influence on User Depth Perception of Augmented Reality Neurosurgical Simulators",
    body: 'H Ghandorh, R Eagleson, S de Ribaupierre 2018 IEEE Conference on Virtual Reality and 3D User Interfaces (VR), 557-558',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:uJ-U7cs_P_0C',
  },
  {
    year: '2018',
    title:
      'Real-time interactive tractography analysis for multimodal brain visualization tool: MultiXplore',
    body: 'SM Bakhshmand, S de Ribaupierre, R Eagleson Medical Imaging 2017: Image-Guided Procedures, Robotic Interventions, and \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:HE397vMXCloC',
  },
  {
    year: '2017',
    title:
      'Multixplore: Multimodal exploration platform for collocated functional and structural connectivity',
    body: 'SM Bakhshmand, S de Ribaupierre, R Eagleson Organization for Human Brain Mapping annual meeting',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:V3AGJWp-ZtQC',
  },
  {
    year: '2016',
    title:
      'Evidence of ventricular contamination of the optical signal in preterm neonates with post hemorrhagic ventricle dilation',
    body: 'J Kishimoto, M Diop, P McLachlan, S de Ribaupierre, DSC Lee, ... Optical Tomography and Spectroscopy of Tissue XI 9319, 931908',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:b0M2c_1WBrUC',
  },
  {
    year: '2015',
    title:
      'L\u2019atteinte orbito-temporo-faciale dans la neurofibromatose de type 1 (NF1)',
    body: 'B Rilliet, B Pittet, D Montandon, AP Narata, S de Ribaupierre, F Schils, ... Neurochirurgie 56 (2-3), 257-270',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:ULOm3_A8WrAC',
  },
  {
    year: '2010',
    title:
      'Simulation reduces navigational errors in cerebral angiography training',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre Advances in Simulation 5 (1), 1-8',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:L7CI7m0gUJcC',
  },
  {
    year: '2020',
    title:
      'Novel connectivity map normalization procedure for improved quantitative investigation of structural thalamic connectivity in temporal lobe epilepsy patients',
    body: 'BG Santyr, JC Lau, SM Mirsattari, JG Burneo, S de Ribaupierre, ... Journal of Magnetic Resonance Imaging 48 (6), 1529-1539',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:kzcrU_BdoSEC',
  },
  {
    year: '2018',
    title:
      'Visual Perception and Human\u2013Computer Interaction in Surgical Augmented and Virtual Reality Environments',
    body: 'R Eagleson, S de Ribaupierre Mixed and Augmented Reality in Medicine, 83-98',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:VaXvl8Fpj5cC',
  },
  {
    year: '2018',
    title:
      'Validation of a Hyperspectral NIRS Method for Measuring Oxygen Saturation by Comparison to Time-Resolved NIRS',
    body: 'M Kewin, D Milej, A Abdalmalak, A Rajaram, M Diop, S de Ribaupierre, ... Optical Tomography and Spectroscopy, OW4C. 4',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:NJ774b8OgUMC',
  },
  {
    year: '',
    title: '1',
    body: 'J Jin, S De Ribaupierre, R Eagleson Biol. Eng. Med.',
    link: 'https://scholar.google.ca/scholar?oi=bibs&hl=en&cites=16474417295399445603',
  },
  {
    year: '2018',
    title:
      'The incidence and management of non-head and neck incidentalomas for the head and neck surgeon',
    body: 'A Sahovaler, DH Yeh, D Morrison, S de Ribaupierre, J Izawa, A Power, ... Oral oncology 74, 98-104',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:dQ2og3OwTAUC',
  },
  {
    year: '2017',
    title:
      'An Examination of Metrics for a Simulated Ventriculostomy Part-Task',
    body: 'R Armstrong, D Noltie, R Eagleson, S De Ribaupierre Medicine Meets Virtual Reality 22, 29-32',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:8AbLer7MMksC',
  },
  {
    year: '2016',
    title:
      '3D MR ventricle segmentation in pre-term infants with post-hemorrhagic ventricle dilation',
    body: 'W Qiu, J Yuan, J Kishimoto, Y Chen, S De Ribaupierre, B Chiu, A Fenster Medical Imaging 2015: Image Processing 9413, 941310',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:CHSYGLWDkRkC',
  },
  {
    year: '2015',
    title: 'Simulation of brain-skull development utilizing a hybrid model',
    body: 'J Jin, R Eagleson, S de Ribaupierre, S Fels Proceedings of the 2014 Summer Simulation Multiconference, 1-8',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:pqnbT2bcN3wC',
  },
  {
    year: '2014',
    title:
      'In vivo validation of a 3D ultrasound system for imaging the lateral ventricles of neonates',
    body: 'J Kishimoto, A Fenster, N Chen, D Lee, S de Ribaupierre Medical Imaging 2014: Image-Guided Procedures, Robotic Interventions, and \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:uLbwQdceFCQC',
  },
  {
    year: '2014',
    title:
      'Use of a Digital 3D Brain Model as an Intermediate Step in Learning Spatial Anatomy',
    body: 'DN Brewer, S de Ribaupierre, TD Wilson The FASEB Journal 25, 495.6-495.6',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:isC4tDSrTZIC',
  },
  {
    year: '2011',
    title:
      'Evaluation of a VR and stereo-endoscopic tool to facilitate 3rd ventriculostomy',
    body: 'K Abhari, S de Ribaupierre, T Peters, R Eagleson Medicine Meets Virtual Reality 18, 1-7',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:roLk4NBRz8UC',
  },
  {
    year: '2011',
    title: 'Hemorrhagic strokes in children: etiology and management',
    body: 'Y El Hassani, S De Ribaupierre, A Sajadi, VM Pereira, B Rilliet Revue Medicale Suisse 6 (237), 401-4, 406',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:Se3iqnhoufwC',
  },
  {
    year: '2010',
    title:
      'A 6-week-old infant with failure to thrive: insidious presentation of group B streptococcal ventriculitis',
    body: 'E Collet, P Diebold, D Paccaud, S de Ribaupierre, B Rilliet Archives de Pediatrie: Organe Officiel de la Societe Francaise de Pediatrie \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:p2g8aNsByqUC',
  },
  {
    year: '2009',
    title:
      'Contralateral frontal ad cerebellar haemorrhage after Perinsular Hemispherotomy for intractable epilepsy.',
    body: 'C Pollo, S de Ribaupierre, J Cotting, JG Villemure European Journal of Neurosurgery 144',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:-_dYPAW6P2MC',
  },
  {
    year: '2002',
    title:
      'Surface and voxel-based analysis of multi-modal quantitative MRI for pre-surgical evaluation of epilepsy patients',
    body: 'AR Khan, M Goubran, S de Ribaupierre, T Peters International Society for Magnetic Resonance in Medicine Annual Meeting \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:UHK10RUVsp4C',
  },
  {
    year: '',
    title:
      'Extraoperative electrical stimulation mapping in epilepsy presurgical evaluation: a proposal and review of the literature.',
    body: 'AS Marti, SM Mirsattari, DA Steven, RS McLachlan, AG Parrent, ... Clinical Neurology and Neurosurgery, 107170',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:i2xiXl-TujoC',
  },
  {
    year: '2022',
    title:
      'Assessing cerebral blood flow, oxygenation and cytochrome c oxidase stability in preterm infants during the first 3 days after birth',
    body: 'A Rajaram, D Milej, M Suwalski, L Kebaya, M Kewin, L Yip, ... Scientific reports 12 (1), 1-10',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:-FonjvnnhkoC',
  },
  {
    year: '2022',
    title:
      '\u2018DIGITS\u2019app-smartphone augmented reality for hand telerehabilitation',
    body: 'H Dong, E Ho, H Shin, T Banerjee, G Masschelein, J Davidson, ... Computer Methods in Biomechanics and Biomedical Engineering: Imaging \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:oNZyr7d5Mn4C',
  },
  {
    year: '2021',
    title:
      'A. 6 Vagus Nerve Stimulation in patients with therapy resistant generalized epilepsy',
    body: 'ASS Marti, SM Mirsattari, KW MacDougall, D Steven, A Parrent, ... Canadian Journal of Neurological Sciences 48 (s3), S15-S15',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:WZBGuue-350C',
  },
  {
    year: '2021',
    title:
      'Quantification of 1.5\u2009T T1 and T2* Relaxation Times of Fetal Tissues in Uncomplicated Pregnancies',
    body: 'S Sethi, SA Giza, E Goldberg, MEET Empey, S de Ribaupierre, ... Journal of Magnetic Resonance Imaging 54 (1), 113-121',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:MLfJN-KU85MC',
  },
  {
    year: '2021',
    title:
      'NNeMo (Neonatal NeuroMonitor): a non-invasive brain monitor for continuous acquisition of cerebral blood flow and cytochrome c oxidase in the premature brain',
    body: 'A Rajaram, LCM Yip, M Suwalski, D Milej, L Kebaya, M Kewin, M Diop, ... Optical Tomography and Spectroscopy of Tissue XIV 11639, 1163916',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:lmc2jWPfTJgC',
  },
  {
    year: '2021',
    title: 'Surgical Workflow Analysis in Cerebral Aneurysm Coiling',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 34 (S1), 1-1',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:EYYDruWGBe4C',
  },
  {
    year: '2020',
    title:
      'Stroke in Children with Moyamoya and Down Syndrome; 3 Cases and Review of the Literature',
    body: 'M Grattan, B Shweiki, S De Ribaupierre, M Jurkiewicz, A Andrade International Journal of Stroke 15 (1_SUPPL), 517',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:k8Z6L05lTy4C',
  },
  {
    year: '2020',
    title:
      'Structure-Function Relationships in the Brain: Applications in Neurosurgery',
    body: 'DR Pur',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:gsN89kCJA0AC',
  },
  {
    year: '2020',
    title:
      'Human\u2013machine interfaces for medical imaging and clinical interventions',
    body: 'R Eagleson, S de Ribaupierre Handbook of Medical Image Computing and Computer Assisted Intervention, 817-839',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:vDijr-p_gm4C',
  },
  {
    year: '2020',
    title:
      'Understanding Aneurysm Coiling in Practice: A Delphi Inquiry into Expert Perception',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 33 (S1), 440.5-440.5',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:uc_IGeMz5qoC',
  },
  {
    year: '2019',
    title:
      "Positive Impact of an Interactive 3D Neuroanatomy E\u2010learning Resource on Students' Spatial Neuroanatomical Knowledge",
    body: 'L Allen, T Wright, R Eagleson, S de Ribaupierre The FASEB Journal 32, 635.23-635.23',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:j8SEvjWlNXcC',
  },
  {
    year: '2018',
    title:
      'Cerebral Aneurysmal Coiling in Virtual Reality\u2010An Overview of Novice Skill Development',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 32, 25.2-25.2',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:tKAzc9rXhukC',
  },
  {
    year: '2018',
    title:
      'Automated registration and stitching of multiple 3D ultrasound images for monitoring neonatal intraventricular hemorrhage',
    body: 'S de Ribaupierre, L Gardi, A Fenster, J Kishimoto',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:e_rmSamDkqQC',
  },
  {
    year: '2018',
    title: 'Imaging fetal brain connectivity in high risk pregnancy',
    body: 'S de Ribaupierre, B de Vrijer, C McKenzie, R Eagleson, S Levin, J Olgivie BrainsCAN',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:ipzZ9siozwsC',
  },
  {
    year: '2018',
    title:
      'P. 035 Correlation of thalamic connectivity with the duration of epilepsy in patients with temporal lobe epilepsy',
    body: 'B Santyr, JC Lau, SM Mirsattari, JG Burneo, S de Ribaupierre, DA Steven, ... Canadian Journal of Neurological Sciences 44 (S2), S22-S22',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:eMMeJKvmdy0C',
  },
  {
    year: '2017',
    title:
      'Audio-Motio Tachograph: A New Device for Assessing Fetal Brain Function in Low-Income Facilities',
    body: 'P Gatutsi, M Mottola, S Rulisa, S de Ribaupierre, R Cusack',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:TIZ-Mc8IlK0C',
  },
  {
    year: '2017',
    title: 'Case Report Journal of Neurology and Neurosurgery',
    body: 'S de Ribaupierre',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:AvfA0Oy_GE0C',
  },
  {
    year: '2017',
    title:
      'AN AUGMENTED REALITY-BASED PLATFORM FOR USERS\u2019TRAINING AND PERFORMANCE ASSESSMENT FOR NEUROSURGICAL TARGETING TASKS',
    body: 'H Ghandorh, S de Ribaupierre, R Eagleson EDULEARN17 Proceedings, 10413-10422',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:hkOj_22Ku90C',
  },
  {
    year: '2017',
    title:
      'P. 027 Investigation of hippocampal sub-structures in HS and non-HS focal temporal lobe epilepsy at 7T',
    body: 'BG Santyr, M Goubran, J Lau, B Kwan, SM Mirsattari, JG Burneo, ... Canadian Journal of Neurological Sciences 43 (S2), S28-S28',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:BrmTIyaxlBUC',
  },
  {
    year: '2016',
    title:
      'QUANTITATIVE 3D AND 2D HEAD ULTRASOUND TO DETERMINE THRESHOLDS FOR INTERVENTION IN PRETERM NEONATES WITH POSTHEMORRHAGIC VENTRICULAR DILATION',
    body: 'J Kishimoto, DSC Lee, F Salehi, W Romano, A Fenster, S de Ribaupierre Paediatrics & Child Health 21 (5), E86',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:eflP2zaiRacC',
  },
  {
    year: '2016',
    title:
      'Assessing simulation\u2010based interventional angiography training in novices',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 30, 787.4-787.4',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:5Ul4iDaHHb8C',
  },
  {
    year: '2016',
    title:
      'Normal Brain-Skull Development with Hybrid Deformable VR Models Simulation',
    body: 'J Jin, S De Ribaupierre, R Eagleson Medicine Meets Virtual Reality 22, 150-153',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:sSrBHYA8nusC',
  },
  {
    year: '2016',
    title:
      '860. Outcome of Mechanical Thrombectomy in the Elderly for the Treatment of Acute Ischemic Stroke',
    body: 'PC Gerszten, E Paschel, R Grandhi, D Okonkwo, A Kanter, YF Chang, ... Journal of Neurosurgery 123 (2), A479-A541',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:uWiczbcajpAC',
  },
  {
    year: '2015',
    title:
      'The Use of Apparent Diffusion Coefficient Values to Predict Outcome in Patients with Traumatic Brain Injury',
    body: 'D Krivosheya, G Hardy-St Pierre, B Young, S de Ribaupierre JOURNAL OF NEUROSURGERY 123 (2), A509-A509',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:l7t_Zn2s7bgC',
  },
  {
    year: '2015',
    title:
      'Effectiveness of Simulation\u2010Based Training in Aneurysm Diagnosis & Coiling in Cerebral Angiography',
    body: 'O Zaika, N Nguyen, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 29, 691.14',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:KxtntwgDAa4C',
  },
  {
    year: '2015',
    title:
      'Evaluation of a Virtual 3D Learning Resource in Neuroanatomy for Undergraduate Medical Students',
    body: 'L Allen, R Eagleson, S de Ribaupierre The FASEB Journal 29, 550.11',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:nb7KW1ujOQ8C',
  },
  {
    year: '2015',
    title:
      'Surgical simulation workflow representation using hierarchical task analysis and statecharts: Implementation on the evolution engine',
    body: 'J MacKenzie, S Carnegie, J Schmalz, M Schmalz, S de Ribaupierre, ... 2014 IEEE Games Media Entertainment, 1-2',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:uWQEDVKXjbEC',
  },
  {
    year: '2014',
    title:
      'Endoscopie neurosurgery simulation: Implementation on the evolution engine',
    body: 'S Carnegie, J MacKenzie, S de Ribaupierre, R Eagleson, A Togeskov, ... 2014 IEEE Games Media Entertainment, 1-2',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:bFI3QPDXJZMC',
  },
  {
    year: '2014',
    title:
      'Functional connectivity and intraindividual variability (brain and behavior) in young vs old adults',
    body: 'S de Ribaupierre, N Mella, M Preti, S Bakhshmand, D Van De Ville, ... F1000Research 5',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:kRWSkSYxWN8C',
  },
  {
    year: '2014',
    title:
      'Monitoring Cerebral Blood Flow in Preterm Infants with Post-Hemorrhagic Hydrocephalus',
    body: 'J Kishimoto, JT Elliot, P McLachlan, M Diop, S de Ribaupierre, DS Lee, ... Biomedical Optics, BS3A. 6',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:70eg2SAEIzsC',
  },
  {
    year: '2014',
    title:
      'Design of a novel approach to teaching online neuroanatomical education (725.1)',
    body: 'L Allen, S de Ribaupierre The FASEB Journal 28, 725.1',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:vV6vV6tmYwMC',
  },
  {
    year: '2014',
    title:
      'Face and content validity of three assessment tools developed to evaluate cerebral angiography performance (536.4)',
    body: 'N Nguyen, R Eagleson, M Boulton, S de Ribaupierre The FASEB Journal 28, 536.4',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:lSLTfruPkqcC',
  },
  {
    year: '2014',
    title: 'THE DORSAL HIPPOCAMPAL COMMISSURE IN TEMPORAL LOBE EPILEPSY',
    body: 'BA Zegarra, A Khan, S De Ribaupierre, J Burneo, P Terry, D Steven EPILEPSIA 54, 307-307',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:2KloaMYe4IUC',
  },
  {
    year: '2013',
    title:
      '3-D Volumetric Assessment of Cerebral Ventricles and Quantitative Cerebral Blood Flow in the Management of Posthemorrhagic Hydrocephalus in Preterm Infants',
    body: 'J Kishimoto, S de Ribaupierre, W Romano, K Lawrence, M Diop, S Levin, ... Paediatrics & Child Health 18 (suppl_A), 9A-9A',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:WA5NYHcadZ8C',
  },
  {
    year: '2013',
    title:
      'Development of a 3D Ultrasound System to Investigate Post-Hemorrhagic Hydrocephalus in Pre-term Neonates',
    body: 'K St Lawrence, W Romano, A Fenster, S de Ribaupierre',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:BwyfMAYsbu0C',
  },
  {
    year: '2013',
    title:
      'Exploration of fused multi-volume images using user-defined binary masks',
    body: 'R Armstrong, R Eagleson, S de Ribaupierre Proceedings of the 18th ACM symposium on Virtual reality software and \u2026',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:TQgYirikUcIC',
  },
  {
    year: '2012',
    title:
      'Neurosurgical management of frontal lobe epilepsy in children Clinical article (vol 10, pg 206, 2012)',
    body: 'S Vachhrajani, S de Ribaupierre, H Otsubo, A Ochi, SK Weiss, E Donner, ... JOURNAL OF NEUROSURGERY-PEDIATRICS 10 (6), 565-565',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:VLnqNzywnoUC',
  },
  {
    year: '2012',
    title: 'Using motion capture to manipulate and edit meshes',
    body: 'J Istead, R Eaglesonan, S de Ribaupierre ACM SIGGRAPH 2012 Posters, 1-1',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:Z5m8FVwuT1cC',
  },
  {
    year: '2012',
    title:
      'Overlapping neural circuits for visuospatial attention and eye movements in human cerebellum.',
    body: 'CL Striemer, MA Goodale, S de Ribaupierre Journal of Vision 12 (9), 375-375',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:D03iK_w7-QYC',
  },
  {
    year: '2012',
    title:
      'An interactive 3D model of the cranial nerve and brainstem nuclei for enhanced learning of neuroanatomy',
    body: 'KL Pedersen, S de Ribaupierre, TD Wilson The FASEB Journal 26, 530.2-530.2',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:g3aElNc5_aQC',
  },
  {
    year: '2012',
    title: 'Contents Vol. 47, 2011',
    body: 'O Tehli, I Hodaj, C Kural, I Solmaz, O Onguru, Y Izci, S \u00c7elik, K G\u00f6ksu, ... Pediatric Neurosurgery 47 (6), I-VI',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:dTyEYWd-f8wC',
  },
  {
    year: '2011',
    title:
      'Stagnation pond\u00e9rale chez un nourrisson de six semaines: pr\u00e9sentation insidieuse d\u2019une ventriculite \u00e0 streptocoque du groupe B',
    body: 'E Collet, P Diebold, D Paccaud, S de Ribaupierre, B Rilliet Archives de p\u00e9diatrie 16 (4), 360-363',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:YOwf2qJgpHMC',
  },
  {
    year: '2009',
    title:
      'Presurgical language mapping in epileptic children: fMRI and depth electrode stimulation',
    body: 'S de Ribaupierre, M Fohlen, C Bulteau, G Dorfmuller, O Delalande, ... NeuroImage, S119',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:5nxA0vEk-isC',
  },
  {
    year: '2009',
    title:
      'Surgical treatment of intractable frontal lobe epilepsy in children: The sick kids experience',
    body: 'S Vachhrajani, de, Ribaupierre S., A Ochi, H Otsubo, O Snead, J Rutka EPILEPSIA 48, 118-119',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:bnK-pcrLprsC',
  },
  {
    year: '2007',
    title:
      'Localisation of language networks in children with epilepsy: Comparison of depth electrode intracortical stimulation and fMRI',
    body: 'S De Ribaupierre, O Delalande, C Bulteau, G Dorfmuller, C Jallin, ... EPILEPSIA 48, 43-44',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:k_IJM867U9cC',
  },
  {
    year: '2007',
    title:
      'Durity, FA 142 Edebali, N. 418 Egge, A. 472, 482 Eide, PK 472, 482 Elhammady, MSA 209',
    body: 'KH Cho, CY Choi, A Choudhary, A Chowdhary, B Cirak, J Collins, ... Pediatr Neurosurg 43, 547',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:RHpTSmoSYBkC',
  },
  {
    year: '2007',
    title:
      'Lumbalgien und Ischialgien ohne Funktionsausfall-Welchen Stellenwert hat k\u00f6rperliche Aktivit\u00e4t f\u00fcr die Behandlung?',
    body: 'S de Ribaupierre, L Regli Swiss Medical Forum 6 (23), 542-548',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:Y5dfb0dijaUC',
  },
  {
    year: '2006',
    title:
      'Lombalgies et lombosciatalgies non d\u00e9ficitaires\u2013Quelle est la place de l\u2019activit\u00e9 physique dans la prise en charge?',
    body: 'S de Ribaupierre, L Regli Forum M\u00e9dical Suisse 6 (23), 542-548',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:3fE2CSJIrl8C',
  },
  {
    year: '2006',
    title:
      'Negative neurofunctional effects of frequency, depth and environment in recreational scuba diving: the Geneva" memory dive" study',
    body: 'DO Slosman, S De Ribaupierre, C Chicherio, C Ludwig, ML Montandon, ... SPUMS JOURNAL 35 (2), 102',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:-f6ydRqryjwC',
  },
  {
    year: '2005',
    title:
      'Extinction of an epileptic mirror focus during functional hemispherectomy',
    body: 'D Debatisse, S De Ribaupierre, MM Ingvar, E Roulet, PA Despland, ... EPILEPSIA 45, 178-178',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:bEWYMUwI8FkC',
  },
  {
    year: '2004',
    title:
      'DIFFERENCES IN DIVING BEHAVIOR AS A FUNCTION OF AGE AND GENDER: DEMOGRAPHIC RESULTS OF THE GENEVA" MEMORY DIVE" STUDY',
    body: 'DO Slosman, C Chicherio, S de Ribaupierre, JP Willy, M Allaoua, ...',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:7PzlFSSx8tAC',
  },
  {
    year: '2003',
    title:
      'THE LONGITUDINAL" MEMORY-DIVE" STUDY. PART 1: LONG-TERM EFFECTS OF SCUBA-DIVING ON CEREBRAL BLOOW FLOW',
    body: 'DO Slosman, C Chicherio, S de Ribaupierre, JP Willy, C Ludwig, ...',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:dhFuZR0502QC',
  },
  {
    year: '2003',
    title:
      'THE LONGITUDINAL" MEMORY-DIVE" STUDY. PART 2: LONG-TERM EFFECTS OF SCUBA-DIVING ON COGNITIVE PERFORMANCES',
    body: 'C Chicherio, S de Ribaupierre, JP Willy, ML Montandon, C Ludwig, ...',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:QIV2ME_5wuYC',
  },
  {
    year: '2003',
    title:
      'LONG-TERM EFFECTS OF RECREATIONAL SCUBA-DIVING ON CEREBRAL BLOOD FLOW AND COGNITIVE PERFORMANCE: TRANSVERSAL RESULTS OF THE GENEVA" MEMORY DIVE" STUDY.',
    body: 'DO Slosman, S de Ribaupierre, CH Chicherio, C Ludwig, ...',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:hC7cP41nSMkC',
  },
  {
    year: '2002',
    title:
      'SUSCEPTIBILITY TO BUBBLES FORMATION: INITIAL RESULTS OF THE GENEVA" MEMORY DIVE" STUDY.',
    body: 'S Valera-Kummer, CH Chicherio, FX Slosman, S de Ribaupierre, ...',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:9ZlFYXVOiuMC',
  },
  {
    year: '2002',
    title:
      'Age differences, cognitive control, and prefrontal cortex in the process dissociation procedure',
    body: 'C Chicherio, C Ludwig, S de Ribaupierre, S Adam, M Van der Linden, ...',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:mVmsd5A6BfQC',
  },
  {
    year: '2001',
    title:
      'Quantitative Xe-133 SPECT in normal population: T-score analysis as a primary approach for clinical use.',
    body: 'DO Slosman, C Chicherio, C Ludwig, S De Ribaupierre, L Genton, ... JOURNAL OF NUCLEAR MEDICINE 42 (5), 236P-236P',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:maZDTaKrznsC',
  },
  {
    year: '2001',
    title: 'Effects of diving environment on the cerebellum',
    body: 'S de Ribaupierre, C Chicherio, C Ludwig, L Genton, C Pichard, ... NeuroImage 6 (13), 782',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:4OULZ7Gr8RgC',
  },
  {
    year: '2001',
    title:
      'Moderating Effect of Cortical Thickness on BOLD Signal Variability Age-Related Changes"(2019)',
    body: "RA Eagleson, A de Ribaupierre, N Mella, S de Ribaupierre Brain and Mind Institute Researchers' Publications 433",
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:M7yex6snE4oC',
  },
  {
    year: '',
    title: 'Deformational Plagiocephaly 10',
    body: 'O Vernet, S de Ribaupierre, B Rilliet',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:b1wdh0AR-JQC',
  },
  {
    year: '',
    title:
      'Visualization of Multimodal Brain Connectivity for Neurosurgical Planning using Handheld Device Augmented Reality',
    body: 'DR Pur, D Kikinov, S de Ribaupierre, RA Eagleson',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:epqYDVWIO7EC',
  },
  {
    year: '',
    title: 'Endoscopic Neurosurgery Simulation',
    body: 'S Carnegie, J MacKenzie, S de Ribaupierre, R Eagleson, A Togeskov, ...',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:yB1At4FlUx8C',
  },
  {
    year: '',
    title:
      'Overlapping neural circuits for visuospatial attention and voluntary eye movements in human cerebellum',
    body: 'CL Striemer, MA Goodale, S de Ribaupierre',
    link: 'https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=yXssN6MAAAAJ&cstart=100&pagesize=100&citation_for_view=yXssN6MAAAAJ:JQOojiI6XY0C',
  },
]

const eagleson_Publications = [
  {
    year: '',
    title: 'The effects of delay on the kinematics of grasping',
    body: 'Y Hu, R Eagleson, MA Goodale Experimental Brain Research 126 (1), 109-116',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:xtRiw3GOFMkC',
  },
  {
    year: '1999',
    title:
      'Volume visualization: a technical overview with a focus on medical applications',
    body: 'Q Zhang, R Eagleson, TM Peters Journal of digital imaging 24 (4), 640-664',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:rO6llkc54NcC',
  },
  {
    year: '2011',
    title:
      'Healthcare training enhancement through virtual reality and serious games',
    body: 'S Ribaupierre, B Kapralos, F Haji, E Stroulia, A Dubrowski, R Eagleson Virtual, augmented reality and serious games for healthcare 1, 9-27',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:dfsIfKJdRG4C',
  },
  {
    year: '2014',
    title:
      'Evaluation of neuroanatomical training using a 3D visual reality model.',
    body: 'DN Brewer, TD Wilson, R Eagleson, S De Ribaupierre MMVR, 85-91',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:2P1L_qKh6hAC',
  },
  {
    year: '2012',
    title:
      'Training for planning tumour resection: augmented reality and human factors',
    body: 'K Abhari, JSH Baxter, ECS Chen, AR Khan, TM Peters, S De Ribaupierre, ... IEEE Transactions on Biomedical Engineering 62 (6), 1466-1477',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:08ZZubdj9fEC',
  },
  {
    year: '2014',
    title:
      'A low-cost internet-based telerobotic system for access to remote laboratories',
    body: 'S You, T Wang, R Eagleson, C Meng, Q Zhang Artificial Intelligence in Engineering 15 (3), 265-279',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:EUQCXRtRnyEC',
  },
  {
    year: '2001',
    title:
      'Evaluation of an online three\u2010dimensional interactive resource for undergraduate neuroanatomy education',
    body: 'LK Allen, R Eagleson, S de Ribaupierre Anatomical sciences education 9 (5), 431-439',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:KxtntwgDAa4C',
  },
  {
    year: '2016',
    title:
      'Recursive estimation of time-varying motion and structure parameters',
    body: 'JL Barron, R Eagleson Pattern Recognition 29 (5), 797-818',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:NhqRSupF_l8C',
  },
  {
    year: '1996',
    title: 'Method of Delivery of Therapeutic Metal Ions, Alloys and Salts',
    body: 'R Eagleson, R Goldsmith, MJ Rieder, IR Marshall, J Greenhalgh US Patent App. 11/720,074',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:B3FOqHPlNUQC',
  },
  {
    year: '2008',
    title:
      'Human visual servoing for reaching and grasping: The role of 3D geometric features',
    body: 'Y Hu, R Eagleson, MA Goodale Proceedings 1999 IEEE International Conference on Robotics and Automation \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:sSrBHYA8nusC',
  },
  {
    year: '1999',
    title:
      'Dynamic real-time 4D cardiac MDCT image display using GPU-accelerated volume rendering',
    body: 'Q Zhang, R Eagleson, TM Peters Computerized medical imaging and graphics 33 (6), 461-476',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:W7OEmFMy1HYC',
  },
  {
    year: '2009',
    title:
      'Virtual and augmented medical imaging environments: Enabling technology for minimally invasive cardiac interventional guidance',
    body: 'CA Linte, J White, R Eagleson, GM Guiraudon, TM Peters IEEE reviews in biomedical engineering 3, 25-47',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:u5HHmVD_uO8C',
  },
  {
    year: '2010',
    title:
      'Are there advantages to robotic-assisted surgery over laparoscopy from the surgeon\u2019s perspective?',
    body: 'JA Van Koughnett, S Jayaraman, R Eagleson, D Quan, ... Journal of robotic surgery 3 (2), 79-82',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:UxriW0iASnsC',
  },
  {
    year: '2009',
    title:
      'Developing a video-mediated communication system for hospitalized children',
    body: 'DI Fels, LA Williams, G Smith, J Treviranus, R Eagleson Telemedicine Journal 5 (2), 193-208',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:CHSYGLWDkRkC',
  },
  {
    year: '1999',
    title: 'Connectionist networks do not model brain function',
    body: 'R Eagleson, DP Carey Behavioral and Brain Sciences 15 (4), 734-735',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:WbkHhVStYXYC',
  },
  {
    year: '1992',
    title: 'Educational software usability: Artifact or Design?',
    body: 'SE Van Nuland, R Eagleson, KA Rogers Anatomical sciences education 10 (2), 190-199',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:ufrVoPGSRksC',
  },
  {
    year: '2017',
    title:
      'Cognitive intraindividual variability and white matter integrity in aging',
    body: 'N Mella, S de Ribaupierre, R Eagleson, A De Ribaupierre The Scientific World Journal 2013',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:b0M2c_1WBrUC',
  },
  {
    year: '2013',
    title:
      'Image-guided laser projection for port placement in minimally invasive surgery',
    body: 'J Marmurek, C Wedlake, U Pardasani, R Eagleson, T Peters Stud. Health Tech. Inform 119, 367-372',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:aqlVkmm33-oC',
  },
  {
    year: '2006',
    title:
      'Measurement of the 2D affine Lie group parameters for visual motion analysis.',
    body: 'R Eagleson Spatial vision',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:ns9cj8rnVeAC',
  },
  {
    year: '1992',
    title:
      'Evaluation of a mobile augmented reality application for image guidance of neurosurgical interventions',
    body: 'M Kramers, R Armstrong, SM Bakhshmand, A Fenster, S de Ribaupierre, ... Medicine Meets Virtual Reality 21, 204-208',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&citation_for_view=r67a-tkAAAAJ:8k81kl-MbHgC',
  },
  {
    year: '2014',
    title:
      'Implementation of clinical research trials using web-based and mobile devices: challenges and solutions',
    body: 'R Eagleson, L Altamirano-Diaz, A McInnis, E Welisch, S De Jesus, ... BMC medical research methodology 17 (1), 1-8',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:UeHWp8X0CEIC',
  },
  {
    year: '2017',
    title:
      'Rapid scalar value classification and volume clipping for interactive 3D medical image visualization',
    body: 'Q Zhang, R Eagleson, TM Peters The Visual Computer 27 (1), 3-19',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:bFI3QPDXJZMC',
  },
  {
    year: '2011',
    title:
      'Vertebroplasty performance on simulator for 19 surgeons using hierarchical task analysis',
    body: 'P Wucherer, P Stefan, K Abhari, P Fallavollita, M Weigl, M Lazarovici, ... IEEE transactions on medical imaging 34 (8), 1730-1737',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:JV2RwH3_ST0C',
  },
  {
    year: '2015',
    title:
      'Rapid voxel classification methodology for interactive 3D medical image visualization',
    body: 'Q Zhang, R Eagleson, TM Peters International Conference on Medical Image Computing and Computer-Assisted \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:u9iWguZQMMsC',
  },
  {
    year: '2007',
    title:
      'Design and implementation of an Internet-based embedded control system',
    body: 'H Yang, R Eagleson Proceedings of 2003 IEEE Conference on Control Applications, 2003. CCA 2003 \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:pyW8ca7W8N0C',
  },
  {
    year: '2003',
    title:
      'Design and evaluation of an augmented reality simulator using leap motion',
    body: 'T Wright, S de Ribaupierre, R Eagleson Healthcare technology letters 4 (5), 210-215',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:Wp0gIr-vW9MC',
  },
  {
    year: '2017',
    title:
      'The role of augmented reality in training the planning of brain tumor resection',
    body: 'K Abhari, JSH Baxter, ES Chen, AR Khan, C Wedlake, T Peters, ... Augmented reality environments for medical imaging and computer-assisted \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:geHnlv5EZngC',
  },
  {
    year: '2013',
    title:
      'Repeat prostate biopsy accuracy: simulator-based comparison of two-and three-dimensional transrectal US modalities',
    body: 'DW Cool, MJ Connolly, S Sherebrin, R Eagleson, JI Izawa, J Amann, ... Radiology 254 (2), 587-594',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:Se3iqnhoufwC',
  },
  {
    year: '2010',
    title:
      'GPU-based visualization and synchronization of 4-D cardiac MR and ultrasound images',
    body: 'Q Zhang, R Eagleson, TM Peters IEEE Transactions on Information Technology in Biomedicine 16 (5), 878-890',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:0EnyYjriUFMC',
  },
  {
    year: '2012',
    title: 'The semiotics of medical image segmentation',
    body: 'JSH Baxter, E Gibson, R Eagleson, TM Peters Medical image analysis 44, 54-71',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:WF5omc3nYNoC',
  },
  {
    year: '2018',
    title:
      'Challenges for the usability of AR and VR for clinical neurosurgical procedures',
    body: 'S de Ribaupierre, R Eagleson Healthcare Technology Letters 4 (5), 151-151',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:SeFeTyx0c_EC',
  },
  {
    year: '2017',
    title:
      'Real-time visualization of 4D cardiac MR images using graphics processing units',
    body: 'Q Zhang, R Eagleson, TM Peters 3rd IEEE International Symposium on Biomedical Imaging: Nano to Macro, 2006 \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:lSLTfruPkqcC',
  },
  {
    year: '2006',
    title: 'Motion and structure from time-varying optical flow',
    body: 'J Barron, R Eagleson Vision Interface, 104-111',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:4fKUyHm3Qg0C',
  },
  {
    year: '1995',
    title: 'VR and AR simulator for neurosurgical training',
    body: 'S de Ribaupierre, R Armstrong, D Noltie, M Kramers, R Eagleson 2015 IEEE Virtual Reality (VR), 147-148',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:3fE2CSJIrl8C',
  },
  {
    year: '2015',
    title:
      'Real-time dynamic display of registered 4D cardiac MR and ultrasound images using a GPU',
    body: 'Q Zhang, X Huang, R Eagleson, G Guiraudon, TM Peters Medical Imaging 2007: Visualization and Image-Guided Procedures 6509, 65092D',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:uWQEDVKXjbEC',
  },
  {
    year: '2007',
    title: 'Web-based tele-operated systems using EAI',
    body: 'ED Elliott, R Eagleson 1997 IEEE International Conference on Systems, Man, and Cybernetics \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:u-x6o8ySG0sC',
  },
  {
    year: '1997',
    title:
      'Does ventricular volume affect the neurodevelopmental outcome in infants with intraventricular hemorrhage?',
    body: "M Lo, J Kishimoto, R Eagleson, S Bhattacharya, S De Ribaupierre Child's Nervous System 36 (3), 569-575",
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:9ZlFYXVOiuMC',
  },
  {
    year: '2020',
    title:
      'Moderating effect of cortical thickness on BOLD signal variability age-related changes',
    body: 'DR Pur, RA Eagleson, A De Ribaupierre, N Mella, S de Ribaupierre Frontiers in Aging Neuroscience 11, 46',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:kNdYIx-mwKoC',
  },
  {
    year: '2019',
    title:
      'Realism, criterion validity, and training capability of simulated diagnostic cerebral angiography.',
    body: 'N Nguyen, R Eagleson, M Boulton, S de Ribaupierre MMVR, 297-303',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:mB3voiENLucC',
  },
  {
    year: '2014',
    title: 'Hybrid simulation of brain\u2013skull growth',
    body: 'J Jin, S Shahbazi, J Lloyd, S Fels, S De Ribaupierre, R Eagleson Simulation 90 (1), 3-10',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:qUcmZB5y_30C',
  },
  {
    year: '2014',
    title:
      'GPU-based image manipulation and enhancement techniques for dynamic volumetric medical image visualization',
    body: 'Q Zhang, R Eagleson, TM Peters 2007 4th IEEE International Symposium on Biomedical Imaging: From Nano to \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:P5F9QuxV20EC',
  },
  {
    year: '2007',
    title:
      'Development of augmented reality training simulator systems for neurosurgery using model-driven software engineering',
    body: 'H Ghandorh, J Mackenzie, R Eagleson, S de Ribaupierre 2017 IEEE 30th Canadian Conference on Electrical and Computer Engineering \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:MXK_kJrjxJIC',
  },
  {
    year: '2017',
    title: 'A novel method for assessing visual perception of surgical planes',
    body: 'CM Schlachta, S Ali, H Ahmed, R Eagleson Canadian Journal of Surgery 58 (2), 87',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:TQgYirikUcIC',
  },
  {
    year: '2015',
    title:
      'A mobile augmented reality application for image guidance of neurosurgical interventions',
    body: 'M Kramers, R Armstrong, SM Bakhshmand, A Fenster, S de Ribaupierre, ... American Journal of Biomedical Engineering 3 (6), 169-174',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:eflP2zaiRacC',
  },
  {
    year: '2013',
    title:
      'Development of a Web-Based 3D Module for Enhanced Neuroanatomy Education.',
    body: 'LK Allen, HZ Ren, R Eagleson, S de Ribaupierre MMVR 220, 5-8',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:Y0pCki6q_DkC',
  },
  {
    year: '2016',
    title:
      'Visual enhancement of MR angiography images to facilitate planning of arteriovenous malformation interventions',
    body: 'K Abhari, JSH Baxter, AR Khan, TM Peters, SD Ribaupierre, R Eagleson ACM Transactions on Applied Perception (TAP) 12 (1), 1-15',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:70eg2SAEIzsC',
  },
  {
    year: '2015',
    title:
      'Cognitive constraints in spatial reasoning: Reference frame and reference object selection',
    body: 'TE Taylor, CL Gagn\u00e9, R Eagleson American Association for Artificial Intelligence Technical Report SS-00 4 \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:4TOpqqG69KYC',
  },
  {
    year: '2000',
    title:
      'Binocular estimation of motion and structure from long sequences using optical flow without correspondence',
    body: 'JL Barron, R Eagleson Proceedings., International Conference on Image Processing 2, 193-196',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:K3LRdlH-MEoC',
  },
  {
    year: '1995',
    title: 'Spatial ability and training in virtual neuroanatomy',
    body: 'L Plumley, R Armstrong, S De Ribaupierre, R Eagleson Medicine Meets Virtual Reality 20, 324-329',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:4OULZ7Gr8RgC',
  },
  {
    year: '2013',
    title: 'Medical education through virtual worlds: the HLTHSIM project',
    body: 'R Eagleson, S de Ribaupierre, S King, E Stroulia Medicine Meets Virtual Reality 18, 180-184',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:_FxGoFyzp5QC',
  },
  {
    year: '2011',
    title: 'Control of a remote communication system by children',
    body: 'L Williams, D Fels, J Treviranus, G Smith, D Spargo, R Eagleson International journal of industrial ergonomics 22 (4-5), 275-283',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:k_IJM867U9cC',
  },
  {
    year: '1998',
    title: 'A neural network model of spatial indexing',
    body: 'BJ ACTON, RA EAGLESON Investigative Ophthalmology & Visual Science 34 (4), 784-784',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:J_g5lzvAfSwC',
  },
  {
    year: '1993',
    title:
      'Augmented reality for neurosurgical guidance: an objective comparison of planning interface modalities',
    body: 'R Armstrong, T Wright, S Ribaupierre, R Eagleson International Conference on Medical Imaging and Augmented Reality, 233-243',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:TFP_iSt0sucC',
  },
  {
    year: '2016',
    title:
      'A software system for evaluation and training of spatial reasoning and neuroanatomical knowledge in a virtual environment',
    body: 'R Armstrong, S de Ribaupierre, R Eagleson Computer methods and programs in biomedicine 114 (1), 29-37',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:Tiz5es2fbqcC',
  },
  {
    year: '2014',
    title:
      'Use of a mixed-reality system to improve the planning of brain tumour resections: preliminary results',
    body: 'K Abhari, JSH Baxter, ES Chen, AR Khan, C Wedlake, TM Peters, ... Workshop on Augmented Environments for Computer-Assisted Interventions, 55-66',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:iH-uZ7U-co4C',
  },
  {
    year: '2012',
    title:
      'Leap motion performance in an augmented reality workspace: Integrating devices with an interactive platform',
    body: 'T Wright, S de Ribaupierre, R Eagleson IEEE Consumer Electronics Magazine 8 (1), 36-41',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:YFjsv_pBGBYC',
  },
  {
    year: '2018',
    title:
      'Fast and cross-vendor OpenCL-based implementation for voxelization of triangular mesh models',
    body: 'M Faieghi, OR Tutunea-Fatan, R Eagleson Computer-Aided Design and Applications 15 (6), 852-862',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:_xSYboBqXhAC',
  },
  {
    year: '2018',
    title:
      'MultiXplore: Visual exploration platform for multimodal neuroimaging data',
    body: 'SM Bakhshmand, AR Khan, S de Ribaupierre, R Eagleson Journal of neuroscience methods 290, 1-12',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:fQNAKQ3IYiAC',
  },
  {
    year: '2017',
    title:
      'Patient-specific pipeline to create virtual endoscopic third ventriculostomy scenarios',
    body: 'R Armstrong, R Eagleson, S De Ribaupierre Medicine Meets Virtual Reality 21, 14-16',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:l7t_Zn2s7bgC',
  },
  {
    year: '2014',
    title:
      'Graphics hardware based volumetric medical dataset visualization and classification',
    body: 'Q Zhang, R Eagleson, TM Peters Medical Imaging 2006: Visualization, Image-Guided Procedures, and Display \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:2osOgNQ5qMEC',
  },
  {
    year: '2006',
    title: 'Developing a network model of multiple visual indexing',
    body: 'ZW Pylyshyn, RA Eagleson Investigative Ophthalmology & Visual Science 35 (4), 2007-2007',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:KlAtU1dfN6UC',
  },
  {
    year: '1994',
    title:
      'Augmented reality simulator for ultrasound-guided percutaneous renal access',
    body: 'Y Mu, D Hocking, ZT Wang, GJ Garvin, R Eagleson, TM Peters International Journal of Computer Assisted Radiology and Surgery 15 (5), 749-757',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:VOx2b1Wkg3QC',
  },
  {
    year: '2020',
    title:
      'A Systematic Literature Review for Software Portability Measurement: Preliminary Results',
    body: 'H Ghandorh, A Noorwali, AB Nassif, LF Capretz, R Eagleson Proceedings of the 2020 9th International Conference on Software and \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:D03iK_w7-QYC',
  },
  {
    year: '2020',
    title:
      'Multimodal connectivity based eloquence score computation and visualisation for computer-aided neurosurgical path planning',
    body: 'SM Bakhshmand, R Eagleson, S de Ribaupierre Healthcare Technology Letters 4 (5), 152-156',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:35N4QoGY0k4C',
  },
  {
    year: '2017',
    title: 'A framework for GPU accelerated deformable object modeling',
    body: 'A Shahingohar, R Eagleson The International Journal of High Performance Computing Applications 26 (3 \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:IjCSPb-OGe4C',
  },
  {
    year: '2012',
    title:
      'Perceptual enhancement of arteriovenous malformation in MRI angiography displays',
    body: 'K Abhari, JSH Baxter, R Eagleson, T Peters, S De Ribaupierre Medical imaging 2012: image perception, observer performance, and technology \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:L8Ckcad2t8MC',
  },
  {
    year: '2012',
    title:
      'High-quality cardiac image dynamic visualization with feature enhancement and virtual surgical tool inclusion',
    body: 'Q Zhang, R Eagleson, TM Peters The Visual Computer 25 (11), 1019-1035',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:5nxA0vEk-isC',
  },
  {
    year: '2009',
    title: 'Effects of network delay on training for telesurgery',
    body: 'R Rayman, S Primak, R Eagleson 2009 1st International Conference on Wireless Communication, Vehicular \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:7PzlFSSx8tAC',
  },
  {
    year: '2009',
    title:
      'High-quality anatomical structure enhancement for cardiac image dynamic volume rendering',
    body: 'Q Zhang, R Eagleson, GM Guiraudon, TM Peters Medical Imaging 2008: Visualization, Image-Guided Procedures, and Modeling \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:YsMSGLbcyi4C',
  },
  {
    year: '2008',
    title: 'A haptics based simulator for laparoscopic pyeloplasty.',
    body: 'H Wu, C Hourie, R Eagleson, R Patel Studies in Health Technology and Informatics 119, 583-585',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:5Ul4iDaHHb8C',
  },
  {
    year: '2006',
    title: 'Interactive visualization for sensor-based robotic programming',
    body: 'K Stuart, G Chapman, R Eagleson 1997 IEEE International Conference on Systems, Man, and Cybernetics \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:j3f4tGmQtD8C',
  },
  {
    year: '1997',
    title: 'Using PEBBLES to facilitate remote communication and learning',
    body: 'LA Williams, DI Fels, G Smith, J Treviranus, R Eagleson Proceedings of the Human Factors and Ergonomics Society Annual Meeting 41 (1 \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:hC7cP41nSMkC',
  },
  {
    year: '1997',
    title: 'Parallel haptic rendering for orthopedic surgery simulators',
    body: 'M Faieghi, SF Atashzar, OR Tutunea-Fatan, R Eagleson IEEE Robotics and Automation Letters 5 (4), 6388-6395',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:V3AGJWp-ZtQC',
  },
  {
    year: '2020',
    title: 'Fetal response to a maternal internal auditory stimulus',
    body: 'E Goldberg, CA McKenzie, B de Vrijer, R Eagleson, S de Ribaupierre Journal of Magnetic Resonance Imaging 52 (1), 139-145',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:BrmTIyaxlBUC',
  },
  {
    year: '2020',
    title:
      'Parallelized collision detection with applications in virtual bone machining',
    body: 'M Faieghi, OR Tutunea-Fatan, R Eagleson Computer Methods and Programs in Biomedicine 188, 105263',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:ZeXyd9-uunAC',
  },
  {
    year: '2020',
    title:
      'Evaluation of User Performance in Simulation-Based Diagnostic Cerebral Angiography Training.',
    body: 'O Zaika, N Nguyen, M Boulton, R Eagleson, S de Ribaupierre MMVR, 465-468',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:_kc_bZDykSQC',
  },
  {
    year: '2016',
    title: 'Collaborative table-top VR display for neurosurgical planning',
    body: 'R Eagleson, P Wucherer, P Stefan, Y Duschko, S de Ribaupierre, ... 2015 IEEE Virtual Reality (VR), 169-170',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:vV6vV6tmYwMC',
  },
  {
    year: '2015',
    title:
      'Does stereo-endoscopy improve neurosurgical targeting in 3rd ventriculostomy?',
    body: 'K Abhari, S De Ribaupierre, T Peters, R Eagleson Medical Imaging 2011: Image Perception, Observer Performance, and Technology \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:NaGl4SEjCO4C',
  },
  {
    year: '2011',
    title: 'Producing spatial descriptions: Effects of object familiarity',
    body: 'TE Taylor, CL Gagn\u00e9, R Eagleson Proceedings of the 1st International Symposium on Smart Graphics, 69-75',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:q3oQSFYPqjQC',
  },
  {
    year: '2001',
    title: 'Creating an interactive supply student',
    body: 'DI Fels, LA Williams, G Smith, J Treviranus, R Eagleson Proc. Symposium on Industrial Engineering and Management, 86-90',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:RHpTSmoSYBkC',
  },
  {
    year: '1998',
    title:
      'Measurement of Motion-induced Image Deformations: Spatio-Temporal Filters for Translation, Divergence, Curl, and Shear',
    body: 'R Eagleson University of Western Ontario, Centre for Cognitive Science',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:BqipwSGYUEgC',
  },
  {
    year: '1988',
    title:
      'Presurgical brain mapping of the language network in pediatric patients with epilepsy using resting-state fMRI',
    body: 'DR Pur, R Eagleson, M Lo, MT Jurkiewicz, A Andrade, S de Ribaupierre Journal of Neurosurgery: Pediatrics 27 (3), 259-268',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:J-pR_7NvFogC',
  },
  {
    year: '',
    title: '2',
    body: 'P Roy, M Lo, S Bhattacharya, R Eagleson, A Fenster, S de Ribaupierre American journal of perinatology 29',
    link: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=9686621487128614195',
  },
  {
    year: '',
    title: '2',
    body: 'H Ghandorh, R Eagleson, S de Ribaupierre 2018 IEEE Conference on Virtual Reality and 3D User Interfaces (VR), 557-558',
    link: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=13205604339298815741',
  },
  {
    year: '',
    title: '2',
    body: 'SM Bakhshmand, S de Ribaupierre, R Eagleson Medical Imaging 2017: Image-Guided Procedures, Robotic Interventions, and \u2026',
    link: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=7477595454778260995',
  },
  {
    year: '2017',
    title:
      'A RESTFUL service for aggregating state-based user performance data in simulator scenarios',
    body: 'J Mackenzie, R Eagleson 2016 IEEE Games, Entertainment, Media Conference (GEM), 1-2',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:XiSMed-E-HIC',
  },
  {
    year: '2016',
    title:
      'Effect of Spatial Ability on Enhancing Neuroanatomy Education with an Interactive 3D E\u2010learning Module',
    body: 'L Allen, R Eagleson, S Deribaupierre The FASEB Journal 30, 570.6-570.6',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:tOudhMTPpwUC',
  },
  {
    year: '2016',
    title:
      'Multixplore: Multimodal exploration platform for collocated functional and structural connectivity',
    body: 'SM Bakhshmand, S de Ribaupierre, R Eagleson Organization for Human Brain Mapping annual meeting',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:LkGwnXOMwfcC',
  },
  {
    year: '2016',
    title:
      'Medical image volumetric visualization: algorithms, pipelines, and surgical applications',
    body: 'Q Zhang, TM Peters, R Eagleson Medical Image Processing, 291-317',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:M05iB0D1s5AC',
  },
  {
    year: '2011',
    title:
      'A framework for GPU accelerated needle insertion simulation using meshfree methods',
    body: 'A Shahingohar, R Eagleson ACM SIGGRAPH 2010 Posters, 1-1',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:vRqMK49ujn8C',
  },
  {
    year: '2010',
    title:
      'A two-level transfer function based method for heart display with vascular tissue and scar enhancement',
    body: 'Q Zhang, R Eagleson, TM Peters, JA White 2009 IEEE International Symposium on Biomedical Imaging: From Nano to Macro \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:OU6Ihb5iCvQC',
  },
  {
    year: '2009',
    title:
      'A software platform for real-time visualization and manipulation of 4D cardiac images',
    body: 'Q Zhang, R Eagleson, TM Peters International Conference on Functional Imaging and Modeling of the Heart \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:qjMakFHDy7sC',
  },
  {
    year: '2009',
    title:
      'Perceptual capacities and constraints in augmented reality biomedical displays',
    body: 'R Eagleson, T Peters Australasian Physical & Engineering Sciences in Medicine 31 (4), 371',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:IWHjjKOFINEC',
  },
  {
    year: '2008',
    title:
      'Constraints and principles for the design of human-machine interfaces: A virtual reality approach',
    body: "Y Hu, MA Goodale, R Eagleson IEEE SMC'99 Conference Proceedings. 1999 IEEE International Conference on \u2026",
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:8AbLer7MMksC',
  },
  {
    year: '1999',
    title:
      'Group-theoretic analysis of local flow characteristics while visually tracking a textured surface',
    body: 'R Eagleson, T Caelli Proceedings of the 5th International Conference on Image Analysis and \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:olpn-zPbct0C',
  },
  {
    year: '1989',
    title:
      'Simulation reduces navigational errors in cerebral angiography training',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre Advances in Simulation 5 (1), 1-8',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:mVmsd5A6BfQC',
  },
  {
    year: '2020',
    title: 'Vibration analysis in robot-driven glenoid reaming procedure',
    body: 'M Faieghi, SF Atashzar, M Sharma, OR Tutunea-Fatan, R Eagleson, ... 2020 IEEE/ASME International Conference on Advanced Intelligent Mechatronics \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:mvPsJ3kp5DgC',
  },
  {
    year: '2020',
    title:
      'Visual Perception and Human\u2013Computer Interaction in Surgical Augmented and Virtual Reality Environments',
    body: 'R Eagleson, S de Ribaupierre Mixed and Augmented Reality in Medicine, 83-98',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:bnK-pcrLprsC',
  },
  {
    year: '2018',
    title: 'Craniosynostosis assessment using curvature distribution modes',
    body: 'J Jin, S De Ribaupierre, R Eagleson Biol. Eng. Med.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:4JMBOYKVnBMC',
  },
  {
    year: '2018',
    title:
      'An Examination of Metrics for a Simulated Ventriculostomy Part-Task',
    body: 'R Armstrong, D Noltie, R Eagleson, S De Ribaupierre Medicine Meets Virtual Reality 22, 29-32',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=20&pagesize=80&citation_for_view=r67a-tkAAAAJ:eJXPG6dFmWUC',
  },
  {
    year: '2016',
    title:
      'Is Surgeons\u2019 Visual Perception of Tissue Planes a Learned Skill?',
    body: 'ST Ali, R Eagleson, CM Schlachta Journal of the American College of Surgeons 219 (3), S114',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:d1gkVwhDpl0C',
  },
  {
    year: '2014',
    title: 'Simulation of brain-skull development utilizing a hybrid model',
    body: 'J Jin, R Eagleson, S de Ribaupierre, S Fels Proceedings of the 2014 Summer Simulation Multiconference, 1-8',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:blknAaTinKkC',
  },
  {
    year: '2014',
    title:
      'The relationship between mental rotations ability, eye movement patterns, and spatial task performance (535.7)',
    body: 'V Roach, N Nguyen, J Krykylwy, S Deribaupierre, R Eagleson, D Mitchell, ... The FASEB Journal 28, 535.7',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:roLk4NBRz8UC',
  },
  {
    year: '2014',
    title:
      'Establishing the validity and reliability of computer\u2010based simulation for cerebral angiography using the ANGIO Mentor Express',
    body: 'N Nguyen, R Eagleson, S Deribaupierre The FASEB Journal 27, 959.12-959.12',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:abG-DnoFyZgC',
  },
  {
    year: '2013',
    title:
      'Evaluation of a VR and stereo-endoscopic tool to facilitate 3rd ventriculostomy',
    body: 'K Abhari, S de Ribaupierre, T Peters, R Eagleson Medicine Meets Virtual Reality 18, 1-7',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:Zph67rFs4hoC',
  },
  {
    year: '2011',
    title: 'Relative size information influences grip aperture after a delay',
    body: 'Y Hu, R Eagleson, MA Goodale INVESTIGATIVE OPHTHALMOLOGY & VISUAL SCIENCE 40 (4), S412-S412',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:bEWYMUwI8FkC',
  },
  {
    year: '1999',
    title:
      'PEBBLES: providing education by bringing learning environments to students',
    body: 'LA Williams, DI Fels, G Smith, J Treviranus, R Eagleson Advances in human factors/ergonomics, 115-118',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:p2g8aNsByqUC',
  },
  {
    year: '1997',
    title:
      'Exogenous attention facilitates discrimination of affine motion components',
    body: 'RA EAGLESON, JA BURKELL, ZW PYLYSHYN INVESTIGATIVE OPHTHALMOLOGY & VISUAL SCIENCE 34 (4), 1033-1033',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:HDshCWvjkbEC',
  },
  {
    year: '1993',
    title:
      'Group-Theoretic Approach to Motion Analysis for 3D Robotic Tracking',
    body: 'R Eagleson Active Perception and Robot Vision, 373-394',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:f2IySw72cVMC',
  },
  {
    year: '1992',
    title: 'Harmonic analysis for the affine group of visual motion',
    body: 'R Eagleson Proceedings. 5th IEEE International Symposium on Intelligent Control 1990 \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:r0BpntZqJG4C',
  },
  {
    year: '1990',
    title:
      '\u2018DIGITS\u2019app-smartphone augmented reality for hand telerehabilitation',
    body: 'H Dong, E Ho, H Shin, T Banerjee, G Masschelein, J Davidson, ... Computer Methods in Biomechanics and Biomedical Engineering: Imaging \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:AXPGKjj_ei8C',
  },
  {
    year: '2021',
    title:
      'Video Context Improves Performance in Identifying Operative Planes on Static Surgical Images',
    body: 'KN Alsowaina, SF Atashzar, DR Pur, R Eagleson, RV Patel, AI Elnahas, ... Journal of Surgical Education',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:hFOr9nPyWt4C',
  },
  {
    year: '2021',
    title: 'Surgical Workflow Analysis in Cerebral Aneurysm Coiling',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 34 (S1), 1-1',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:pqnbT2bcN3wC',
  },
  {
    year: '2020',
    title: 'Is teaching Histology in 3D useful?',
    body: 'M Sandig, J Roth, M Rivero, R Tarbell, Y Mu, R Eagleson, TD Wilson JOURNAL OF ANATOMY 236, 45-45',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:maZDTaKrznsC',
  },
  {
    year: '2020',
    title:
      'MP47-18 AUGMENTED REALITY SIMULATOR FOR ULTRASOUND GUIDED PERCUTANEOUS RENAL ACCESS',
    body: 'ZT Wang*, Y Mu, D Hocking, R Eagleson, T Peters The Journal of Urology 203 (Supplement 4), e691-e692',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:_Qo2XoVZTnwC',
  },
  {
    year: '2020',
    title:
      'Structure-Function Relationships in the Brain: Applications in Neurosurgery',
    body: 'DR Pur',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:5ugPr518TE4C',
  },
  {
    year: '2020',
    title:
      'Human\u2013machine interfaces for medical imaging and clinical interventions',
    body: 'R Eagleson, S de Ribaupierre Handbook of Medical Image Computing and Computer Assisted Intervention, 817-839',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:ZHo1McVdvXMC',
  },
  {
    year: '2020',
    title:
      'Understanding Aneurysm Coiling in Practice: A Delphi Inquiry into Expert Perception',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 33 (S1), 440.5-440.5',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:hqOjcs7Dif8C',
  },
  {
    year: '2019',
    title:
      'Studying Histology in 3D: Development and Evaluation of an Interactive Virtual Histology Learning Tool using a 3D Model of the Renal Corpuscle',
    body: 'M Rivero, Y Mu, J Roth, T Wilson, R Eagleson, M Sandig The FASEB Journal 32, 25.5-25.5',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:u_35RYKgDlwC',
  },
  {
    year: '2018',
    title:
      "Positive Impact of an Interactive 3D Neuroanatomy E\u2010learning Resource on Students' Spatial Neuroanatomical Knowledge",
    body: 'L Allen, T Wright, R Eagleson, S de Ribaupierre The FASEB Journal 32, 635.23-635.23',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:QIV2ME_5wuYC',
  },
  {
    year: '2018',
    title:
      'Cerebral Aneurysmal Coiling in Virtual Reality\u2010An Overview of Novice Skill Development',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 32, 25.2-25.2',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:Tyk-4Ss8FVUC',
  },
  {
    year: '2018',
    title: 'Imaging fetal brain connectivity in high risk pregnancy',
    body: 'S de Ribaupierre, B de Vrijer, C McKenzie, R Eagleson, S Levin, J Olgivie BrainsCAN',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:D_sINldO8mEC',
  },
  {
    year: '2018',
    title:
      'Impact of integrating interactive neuroanatomy e\u2010learning resources on novice student learning',
    body: 'L Allen, R Eagleson, S deRibaupierre The FASEB Journal 31, 584.6-584.6',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:HoB7MX3m0LUC',
  },
  {
    year: '2017',
    title: 'Relevant Reviews',
    body: 'S So, RM Patel, SL Orebaugh, SE Van Nuland, R Eagleson, KA Rogers',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:t6usbXjVLHcC',
  },
  {
    year: '2017',
    title:
      'AN AUGMENTED REALITY-BASED PLATFORM FOR USERS\u2019TRAINING AND PERFORMANCE ASSESSMENT FOR NEUROSURGICAL TARGETING TASKS',
    body: 'H Ghandorh, S de Ribaupierre, R Eagleson EDULEARN17 Proceedings, 10413-10422',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:e5wmG9Sq2KIC',
  },
  {
    year: '2017',
    title:
      'Assessing simulation\u2010based interventional angiography training in novices',
    body: 'O Zaika, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 30, 787.4-787.4',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:M3ejUd6NZC8C',
  },
  {
    year: '2016',
    title:
      'Normal Brain-Skull Development with Hybrid Deformable VR Models Simulation',
    body: 'J Jin, S De Ribaupierre, R Eagleson Medicine Meets Virtual Reality 22, 150-153',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:XiVPGOgt02cC',
  },
  {
    year: '2016',
    title:
      'Effectiveness of Simulation\u2010Based Training in Aneurysm Diagnosis & Coiling in Cerebral Angiography',
    body: 'O Zaika, N Nguyen, M Boulton, R Eagleson, S de Ribaupierre The FASEB Journal 29, 691.14',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:tS2w5q8j5-wC',
  },
  {
    year: '2015',
    title:
      'Evaluation of a Virtual 3D Learning Resource in Neuroanatomy for Undergraduate Medical Students',
    body: 'L Allen, R Eagleson, S de Ribaupierre The FASEB Journal 29, 550.11',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:O3NaXMp0MMsC',
  },
  {
    year: '2015',
    title:
      'Surgical simulation workflow representation using hierarchical task analysis and statecharts: Implementation on the evolution engine',
    body: 'J MacKenzie, S Carnegie, J Schmalz, M Schmalz, S de Ribaupierre, ... 2014 IEEE Games Media Entertainment, 1-2',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:LPZeul_q3PIC',
  },
  {
    year: '2014',
    title:
      'Endoscopie neurosurgery simulation: Implementation on the evolution engine',
    body: 'S Carnegie, J MacKenzie, S de Ribaupierre, R Eagleson, A Togeskov, ... 2014 IEEE Games Media Entertainment, 1-2',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:qxL8FJ1GzNcC',
  },
  {
    year: '2014',
    title:
      'Functional connectivity and intraindividual variability (brain and behavior) in young vs old adults',
    body: 'S de Ribaupierre, N Mella, M Preti, S Bakhshmand, D Van De Ville, ... F1000Research 5',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:RGFaLdJalmkC',
  },
  {
    year: '2014',
    title:
      'Face and content validity of three assessment tools developed to evaluate cerebral angiography performance (536.4)',
    body: 'N Nguyen, R Eagleson, M Boulton, S de Ribaupierre The FASEB Journal 28, 536.4',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:RYcK_YlVTxYC',
  },
  {
    year: '2014',
    title:
      'Exploration of fused multi-volume images using user-defined binary masks',
    body: 'R Armstrong, R Eagleson, S de Ribaupierre Proceedings of the 18th ACM symposium on Virtual reality software and \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:zYLM7Y9cAGgC',
  },
  {
    year: '2012',
    title: 'Group-Theoretic Approach to',
    body: 'R Eagleson Active Perception and Robot Vision 83, 373',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:g5m5HwL7SMYC',
  },
  {
    year: '2012',
    title: 'GPU Accelerated Needle Insertion Simulation using Meshfree Methods',
    body: 'A Shahingohar, S deRibaupierre, R Eagleson The Eurographics Association',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:dhFuZR0502QC',
  },
  {
    year: '2010',
    title:
      'Abstracts of presentations to the Annual Meetings of the Canadian Association of General Surgeons Canadian Association of Thoracic Surgeons Canadian Society of Colon and Rectal \u2026',
    body: 'MRC Dickeson, DCM Mok, P Hebbard, AM Borowiec, S Hassan, ... Canadian Journal of Surgery 51 (Suppl), 2-24',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:Mojj43d5GZwC',
  },
  {
    year: '2008',
    title:
      'High-quality anatomical structure enhancement for cardiac image dynamic volume rendering [6918-112]',
    body: 'Q Zhang, R Eagleson, GM Guiraudon, TM Peters PROCEEDINGS-SPIE THE INTERNATIONAL SOCIETY FOR OPTICAL ENGINEERING 6918 (2 \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:4DMP91E08xMC',
  },
  {
    year: '2008',
    title: 'Invasive Surgery',
    body: 'R EAGLESON, T PETERS Medicine Meets Virtual Reality 14: Accelerating Change in Healthcare: Next \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:Y5dfb0dijaUC',
  },
  {
    year: '2006',
    title: 'Computation of time-varying motion and',
    body: 'JL Barron, R Eagleson Advances in Computer Vision, 181',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:eQOLeE2rZwMC',
  },
  {
    year: '1997',
    title: 'Canonical decomposition of affine motion for visual servoing',
    body: 'M Wong, R Eagleson 1997 IEEE International Conference on Systems, Man, and Cybernetics \u2026',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:3s1wT3WcHBgC',
  },
  {
    year: '1997',
    title:
      'Computation of time-varying motion and structure parameters from real image sequences',
    body: 'JL Barron, R Eagleson Advances in Computer Vision, 181-190',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:ULOm3_A8WrAC',
  },
  {
    year: '1997',
    title:
      'Explorations on a Sphere: A Visual Behaviour Using Affine Motion Analysis for Servoing',
    body: 'R Eagleson Retrospective Collection 21, 187-196',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:cFHS6HbyZ2cC',
  },
  {
    year: '1996',
    title: 'Motor strategy selection by cognitive controllers',
    body: 'R Eagleson Behavioral and Brain Sciences 14 (2), 353-354',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:zA6iFVUQeVQC',
  },
  {
    year: '1991',
    title: 'Visual motion analysis for robotic tracking tasks',
    body: 'RA Eagleson',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:dshw04ExmUIC',
  },
  {
    year: '1991',
    title: 'Computations over abstract categories of representation',
    body: 'R Eagleson Behavioral and Brain Sciences 13 (4), 661-662',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:NMxIlDl6LWMC',
  },
  {
    year: '1990',
    title: 'Task-dependent constraints on perceptual architectures',
    body: 'R Eagleson Behavioral and Brain Sciences 13 (3), 447-448',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:738O_yMBCRsC',
  },
  {
    year: '1990',
    title:
      "Theory and practice of robotics and manipulators: Proceedings of RoManSy'84: The Fifth CISM-IFToMM Symposium A. Morecki, G. Bianchi and K. Kedzior, Eds. The MIT Press, 1985",
    body: 'R Eagleson Artificial Intelligence in Engineering 4 (4), 205-208',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:nb7KW1ujOQ8C',
  },
  {
    year: '1989',
    title:
      'Moderating Effect of Cortical Thickness on BOLD Signal Variability Age-Related Changes"(2019)',
    body: "RA Eagleson, A de Ribaupierre, N Mella, S de Ribaupierre Brain and Mind Institute Researchers' Publications 433",
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:HE397vMXCloC',
  },
  {
    year: '',
    title:
      'Spatial indexing, sensory integration, and the design of perceptual interfaces',
    body: 'B Fisher, Z Pylyshyn, P Bldng, R Eagleson, J Burkell',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:yD5IFk8b50cC',
  },
  {
    year: '',
    title: 'Time-Varying Optical Flow',
    body: 'R Eagleson',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:fPk4N6BV_jEC',
  },
  {
    year: '',
    title: 'Soon-wook Hwang, KISTI, Korea',
    body: 'H Abachi, J Abbawajy, P Soto-Acosta, T Ahlswede, K Akingbehin, P Albee, ...',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:GnPB-g6toBAC',
  },
  {
    year: '',
    title:
      'User Interface to Investigate the Role of 2D Pattern Recognition and 3D Spatial Reasoning in Surgical Training',
    body: 'L Ashrafi, C Schlachta, R Eagleson',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:M3NEmzRMIkIC',
  },
  {
    year: '',
    title:
      'Neurosurgery Planning and Training for Targeting Tasks in Augmented Reality Environment: User Performance Analysis',
    body: 'H Ghandorh, S de Ribaupierre, R Eagleson',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:isC4tDSrTZIC',
  },
  {
    year: '',
    title:
      'Criterion and face validity of the ANGIO Mentor Express for diagnostic cerebral angiography',
    body: 'N Nguyen, R Eagleson, M Boulton, S deRibaupierre',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:YOwf2qJgpHMC',
  },
  {
    year: '',
    title:
      'Visualization of Multimodal Brain Connectivity for Neurosurgical Planning using Handheld Device Augmented Reality',
    body: 'DR Pur, D Kikinov, S de Ribaupierre, RA Eagleson',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=r67a-tkAAAAJ&cstart=100&pagesize=100&citation_for_view=r67a-tkAAAAJ:UebtZRa9Y70C',
  },
]

// Export publications data for use in other components
export { ribaupierre_Publications, eagleson_Publications }

export default function Home() {
  return (
    <Dashboard title={'Publications'}>
      {/*add a title that says Dr. de Ribaupierre's publications*/}
      <h1 className="mb-8 text-3xl font-bold">
        Dr. de Ribaupierre Publications
      </h1>
      <PublicationsLayout publications={ribaupierre_Publications} />

      <h1 className="mb-8 pt-20 text-3xl font-bold">
        Dr. Eagleson Publications
      </h1>
      <PublicationsLayout publications={eagleson_Publications} />
    </Dashboard>
  )
}
