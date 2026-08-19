const flashcards = [
    {
        number: 1,
        question: "It is the process by which a potential client achieves status of a \"client\". It marks the beginning of the helping relationship.",
        choices: [
            "Referral",
            "Transfer",
            "Intake",
            "Admission"
        ],
        answer: 2,
        explanation: "Intake is the process by which a potential client becomes an actual client and marks the beginning of the helping relationship."
    },
    {
        number: 2,
        question: "This approach involves the provision of brief psychological services to clients experiencing temporary feelings of severe acute distress and faced with overwhelming major stressful events.",
        choices: [
            "Cognitive behavioral",
            "Psycho-social Approach",
            "Functional",
            "Crisis intervention"
        ],
        answer: 3,
        explanation: "Crisis intervention provides brief psychological services to clients experiencing severe acute distress due to overwhelming stressful events."
    },
    {
        number: 3,
        question: "Social workers working in criminal or civil law issues, involved in adoption, legal guardianship, child custody, etc. are in this field of social work.",
        choices: [
            "Forensic social work",
            "Industrial",
            "Court social work",
            "Legal Social Work"
        ],
        answer: 0,
        explanation: "Forensic social work involves social work practice related to criminal or civil law issues, including adoption, legal guardianship, and child custody."
    },
    {
        number: 4,
        question: "A casework technique usually accompanying psychological support, directed towards increasing the ego's ability to see external realities more clearly and to understand the client's own emotion, attitudes and behavior.",
        choices: [
            "Psycho-social support",
            "Clarification",
            "Insight Development",
            "Environmental Modification"
        ],
        answer: 2,
        explanation: "Insight Development is directed toward helping the client understand their emotions, attitudes, behavior, and external realities more clearly."
    },
    {
        number: 5,
        question: "Starting in Buffalo, New York in 1877, was rapidly adopted in many cities. Agencies joined together to provide direct services to individuals and families and to plan and coordinate private agencies' efforts to meet pressing urban social problems.",
        choices: [
            "Society for the Prevention of Pauperism",
            "Settlement Houses",
            "Charity Organization Society (COS)",
            "Hull House in Chicago"
        ],
        answer: 2,
        explanation: "The Charity Organization Society (COS) began in Buffalo, New York in 1877 and helped coordinate charitable agencies while providing services to individuals and families."
    },
    {
        number: 6,
        question: "It is the main tool used in social work practice. It is a set of verbal and non-verbal interactions which usually starts between two people although three or more may be participating towards the end.",
        choices: [
            "Interview",
            "Data Collection",
            "Assessment",
            "Intake"
        ],
        answer: 0,
        explanation: "The interview is the main tool used in social work practice and involves verbal and non-verbal interaction between the worker and client."
    },
    {
        number: 7,
        question: "The \"significant others\" in the life of the client whom he/she has personal relationship with. This may include parents, siblings, relatives and friends, people in school, employment, church, and organizations. They are data sources during the information gathering process.",
        choices: [
            "Primary",
            "Secondary",
            "Existing",
            "Key"
        ],
        answer: 1,
        explanation: "Key sources are significant others in the client's life who can provide relevant information during the information-gathering process."
    },
    {
        number: 8,
        question: "It is an assessment, planning, and interventive tool in social work that utilizes a diagram to show the social and personal relationships of an individual with his or her environment. It presents the individual or family and the major systems in the life space, as well as the nature of the individual's or family's relationships with these various systems.",
        choices: [
            "Genogram",
            "Eco-map",
            "Venn Diagram",
            "Family tree"
        ],
        answer: 1,
        explanation: "An eco-map is a diagram that presents an individual or family and their relationships with major systems in their environment."
    },
    {
        number: 9,
        question: "The following are not considered as characteristics of assessment except one:",
        choices: [
            "Assessment should always be complete.",
            "In assessment, decisions are made immediately.",
            "Assessment is always generalized.",
            "Judgment is important in assessment."
        ],
        answer: 3,
        explanation: "Judgment is important in assessment because the social worker must analyze and interpret information to understand the client's situation."
    },
    {
        number: 10,
        case: "case1",
        question: "Assigned as Pamela's caseworker, what was the immediate problem of Pamela?",
        choices: [
            "She was a street child",
            "She is unruly in the center",
            "She was sexually molested by her father",
            "She constantly violates center regulations"
        ],
        answer: 0,
        explanation: "Based on the provided case, Pamela was rescued from the street, making her status as a street child the immediate problem identified for casework."
    },
    {
        number: 11,
        case: "case1",
        question: "What casework principle should primarily become operative concerning this feedback of the houseparent about Pamela?",
        choices: [
            "Principle of non-judgmental attitude",
            "Principle of confidentiality",
            "Principle of individualization",
            "Principle of acceptance"
        ],
        answer: 3,
        explanation: "The principle of acceptance requires the social worker to accept the client as a person while recognizing the client's situation and behavior."
    },
    {
        number: 12,
        case: "case1",
        question: "If you were assigned to handle the case of Pamela, how are you going to establish rapport with her?",
        choices: [
            "Use the technique of small talk",
            "Call her attention to her negative behavior",
            "Conduct in-depth counseling",
            "Apply sanction through positive or negative reinforcement"
        ],
        answer: 0,
        explanation: "Small talk can be used as an initial technique to establish rapport and create a comfortable relationship with the client."
    },
    {
        number: 13,
        case: "case1",
        question: "You need collateral information about Pamela concerning her situation prior to admission in the center. Whom will you contact for this purpose?",
        choices: [
            "Pamela's half-brother",
            "Pamela",
            "The father",
            "The child's mother"
        ],
        answer: 3,
        explanation: "The child's mother is identified in the provided material as the appropriate source of collateral information about Pamela's situation before admission."
    },
    {
        number: 14,
        case: "case1",
        question: "What is the appropriate next step to be taken by the social worker to address this situation of Pamela?",
        choices: [
            "Address her unruliness in the center",
            "Find a suitable family for Pamela",
            "Conduct therapy to address her trauma",
            "Review her intervention plan"
        ],
        answer: 3,
        explanation: "Reviewing the intervention plan allows the social worker to reassess the case and determine whether the planned interventions remain appropriate."
    },
    {
        number: 15,
        case: "case1",
        question: "Termination is usually discussed during this phase of the helping process. The reality of discontinuing the helping relationship often evokes certain feelings and reactions from both worker and client, which must be faced.",
        choices: [
            "Assessment",
            "Termination stage",
            "Planning",
            "Intervention"
        ],
        answer: 1,
        explanation: "The termination stage involves discussing the ending of the helping relationship and addressing the feelings and reactions associated with discontinuing services."
    },
    {
        number: 16,
        case: "case1",
        question: "The following are common principles applied in data collection during the assessment phase. Which of the following is not true?",
        choices: [
            "The client should not be the main source of information, other sources should also be considered initially.",
            "Data to be gathered should directly relate to the identified problems.",
            "The client's permission should be sought before certain kinds of information are obtained.",
            "Data collection is a continuous process."
        ],
        answer: 0,
        explanation: "The provided material identifies the client's information as an important source; therefore, the statement that the client should not be the main source is the incorrect statement."
    },
    {
        number: 17,
        case: "case1",
        question: "Treatment progress is sometimes quite rapid when working with a client in crisis because the client is:",
        choices: [
            "Best able to develop self-direction",
            "In a state of equilibrium",
            "Free of expectations",
            "More receptive to accepting help due to a greater state of vulnerability"
        ],
        answer: 3,
        explanation: "Clients in crisis may be more receptive to accepting help because their vulnerable state can increase their openness to intervention."
    },
    {
        number: 18,
        case: "case1",
        question: "During intake, it is the problem being perceived or experienced by the client, that is a threat to the client's or others' welfare. This may serve as the problem-for-work in a helping relationship.",
        choices: [
            "Working Problem",
            "Underlying Problem",
            "Presenting Problem",
            "Immediate Problem"
        ],
        answer: 2,
        explanation: "The presenting problem is the problem perceived or experienced by the client and may become the initial problem-for-work in the helping relationship."
    },
    {
        number: 19,
        question: "After the necessary relevant information pertaining to the client and the problem have been obtained and synthesized during the assessment phase, these information are organized in this document that the social worker prepares.",
        choices: [
            "Case summary",
            "Case Study",
            "Intake Report",
            "Social Case Study Report"
        ],
        answer: 3,
        explanation: "The Social Case Study Report organizes and synthesizes relevant information about the client and the problem gathered during assessment."
    },
    {
        number: 20,
        question: "The author of the problem-solving framework in social work. She described the social work process as a progressive transaction between the professional helper and the client, consisting of a series of problem-solving operations.",
        choices: [
            "Gertrude Wilson",
            "Karen Horneye",
            "Helen Harris Perlman",
            "Mary Richmond"
        ],
        answer: 2,
        explanation: "Helen Harris Perlman developed the problem-solving framework and described social work as a progressive transaction between the professional helper and client."
    },
    {
        number: 21,
        question: "It is an abstraction of what happened in a social situation between client and worker in the process of the former's seeking help and the latter responding to the former's needs. It provides an account of what has taken place, which is needed when one worker must replace another, or when, in an emergency, one worker must take over for another.",
        choices: [
            "Case Study",
            "Documentation",
            "Process Recording",
            "Recording"
        ],
        answer: 3,
        explanation: "Recording provides an account of what took place between the client and worker and allows continuity when another worker takes over the case."
    },
    {
        number: 22,
        question: "According to this author who is a pioneer of the problem solving process (PSP), PSP is based on reflective thought that begins with a feeling of doubt or confusion. In order to solve a problem, a person follows a rational procedure consisting of steps in an orderly sequence, referred to as the \"five phases of reflective thinking\".",
        choices: [
            "George Polya",
            "John Dewey",
            "Hellen Harris Pearlman",
            "Emanuel Tropp"
        ],
        answer: 1,
        explanation: "John Dewey described reflective thinking as an orderly rational process for solving problems."
    },
    {
        number: 23,
        question: "In social work parlance, this sets the expectations and terms of the commitments and obligations of both client and worker, which are often clearly spelled out; including the specification of tasks to be carried out by the social worker and client and the time frame required.",
        choices: [
            "Helping Process",
            "Helping Contract",
            "Helping Relationship",
            "Problem Solving"
        ],
        answer: 1,
        explanation: "A helping contract specifies the expectations, commitments, obligations, tasks, and time frame agreed upon by the client and social worker."
    },
    {
        number: 24,
        question: "During this stage, the process translates the content of assessment into a goal statement that describes the desired results, and is also concerned with identifying the means to reach the goals set in the helping relationship.",
        choices: [
            "Assessment",
            "Intervention",
            "Planning",
            "Implementation"
        ],
        answer: 2,
        explanation: "Planning translates assessment information into goals and identifies the means for achieving those goals."
    },
    {
        number: 25,
        question: "The social worker acts as an intermediary or conciliator between two persons or sides. In his/her work with individuals, families, groups and communities, the worker often has to engage in efforts that will resolve disputes between the client system and other parties.",
        choices: [
            "Mediator",
            "Counselor",
            "Therapist",
            "Peace Negotiator"
        ],
        answer: 0,
        explanation: "A mediator acts as an intermediary or conciliator to help resolve disputes between the client system and other parties."
    },

    {
        number: 26,
        question: "The objective is to influence another party, for and in the client/community’s interest. Social workers involved in agencies working for environmental or human rights causes usually perform this role.",
        choices: [
            "Advocate",
            "Enabler",
            "Resource Mobilizer",
            "Activist"
        ],
        answer: 0,
        explanation: "An advocate influences another party on behalf of the client or community’s interests."
    },
    {
        number: 27,
        question: "As proposed by Pearlman, the following are the different steps in problem solving process except one:",
        choices: [
            "Study",
            "Treatment",
            "Planning",
            "Diagnosis"
        ],
        answer: 2,
        explanation: "The provided source identifies Planning as the answer."
    },
    {
        number: 28,
        question: "It involves the collection of data about outcomes of a program of action relative to goals and objectives set in advance of the implementation of that program.",
        choices: [
            "Assessment",
            "Feedback",
            "Termination",
            "Evaluation"
        ],
        answer: 3,
        explanation: "Evaluation involves collecting and analyzing information about program outcomes in relation to previously established goals and objectives."
    },
    {
        number: 29,
        question: "This evaluation model forces the worker to find out whether the intervention plan is being implemented as designed, and whether the intervention activities were done as planned. If not, the reasons are identified and adjustments are to be made.",
        choices: [
            "Formative Evaluation",
            "Summative Evaluation",
            "Terminal Evaluation",
            "On-going Evaluation"
        ],
        answer: 0,
        explanation: "Formative Evaluation examines implementation while the intervention is ongoing and allows adjustments to be made when necessary."
    },
    {
        number: 30,
        question: "In the helping process, these are the desired or expected outcomes of an endeavor. It is concerned with solutions to be achieved by the client and the worker at a later period.",
        choices: [
            "Objective",
            "Behavioral Change",
            "Social Change",
            "Goal"
        ],
        answer: 0,
        explanation: "The provided source identifies Objective as the desired or expected outcome of an endeavor."
    },
    {
        number: 31,
        question: "It is the worker’s overall approach to change a situation. It implies orchestrated action that involves different entities, each having a role to play in order to achieve the defined helping goals. Social work has a variety of approaches to practice, called theories of practice or models of practice.",
        choices: [
            "Strategy",
            "Methods",
            "Interventive Models",
            "Approaches"
        ],
        answer: 0,
        explanation: "A strategy is the worker’s overall approach to changing a situation through coordinated action toward helping goals."
    },
    {
        number: 32,
        question: "After the necessary relevant information pertaining to the client and the problem have been obtained/compiled during assessment phase, these information are organized and synthesized in this document that the SWr prepares.",
        choices: [
            "Case summary",
            "Case Study",
            "Intake Report",
            "Treatment Plan"
        ],
        answer: 1,
        explanation: "The provided source identifies Case Study as the document where the gathered information is organized and synthesized."
    },
    {
        number: 33,
        question: "It is the conscious use of one’s self. It is important for social workers in situations where the worker’s values clash with the client’s values. It is also called for when there is a difference between the problems and priorities as the worker sees them and as his/her client sees them.",
        choices: [
            "Self Awareness",
            "Self Determination",
            "Non-judgmental Attitude",
            "Professionalism"
        ],
        answer: 0,
        explanation: "Self Awareness involves the conscious use of oneself, particularly when the worker’s values or perceptions differ from those of the client."
    },
    {
        number: 34,
        question: "The SWr's interventive role is to negotiate the service jungle for clients, whether singly or in groups. The worker links the client to needed services in the community. This requires a broad knowledge of community resources as well as knowledge of the operating procedures of agencies so that effective connections can be made.",
        choices: [
            "Mediator",
            "Social Broker",
            "Advocate",
            "Resource Provider"
        ],
        answer: 1,
        explanation: "A Social Broker links clients with appropriate services and community resources."
    },
    {
        number: 35,
        question: "The process involves the collection of necessary information and its analysis and interpretation in order to reach an understanding of the client, the problem, and the social context in which it exists. The purpose is to provide understanding necessary for appropriate planning.",
        choices: [
            "Social Diagnosis",
            "Social Investigation",
            "Diagnosis",
            "Assessment"
        ],
        answer: 0,
        explanation: "Social Diagnosis involves gathering, analyzing, and interpreting information to understand the client, problem, and social context for appropriate planning."
    },
    {
        number: 36,
        question: "The social worker conducts validation visits to the house of the client to determine whether the information provided by the client to the SWr is accurate.",
        choices: [
            "Assessment",
            "Problem Identification",
            "Data Gathering",
            "Analysis"
        ],
        answer: null,
        explanation: "The provided source does not specify an answer for this question."
    },
    {
        number: 37,
        question: "This is a common reaction on the client’s part during the disengagement phase, where the client manifests behaviors such as ignoring or avoiding any discussion of termination; or not keeping appointments after termination is discussed.",
        choices: [
            "Depression",
            "Avoidance",
            "Denial",
            "Defense Mechanism"
        ],
        answer: 2,
        explanation: "Denial may be manifested by ignoring or avoiding discussions about termination and disengagement."
    },
    {
        number: 38,
        question: "It is the process by which a client is referred by the SWr, usually in the same agency, because the SWr is no longer able to continue working with the client, or because the SWr thinks another SWr is in a better position to work with the client.",
        choices: [
            "Transfer",
            "Referral",
            "Endorsement",
            "Turn-over"
        ],
        answer: 0,
        explanation: "Transfer occurs when a client is moved to another social worker, commonly within the same agency, because another worker is better positioned to continue the service."
    },
    {
        number: 39,
        question: "Which goal is the basis that justifies the giving of material aid to identified client groups and communities?",
        choices: [
            "Enhancement of social functioning by reducing situational deficiency",
            "Prevention of dysfunctioning",
            "Solves impairment",
            "Address inadequacy"
        ],
        answer: 0,
        explanation: "The provided source identifies enhancement of social functioning by reducing situational deficiency as the basis for giving material aid."
    },
    {
        number: 40,
        question: "What is the category of these children who are victims of physical and sexual abuse, civil strife and war, child labor, trafficking and prostitution?",
        choices: [
            "Battered children",
            "Children in need of special protection",
            "Disadvantaged children",
            "Abused/exploited children"
        ],
        answer: 1,
        explanation: "Children exposed to abuse, exploitation, armed conflict, child labor, trafficking, and prostitution are categorized as children in need of special protection."
    },
    {
        number: 41,
        question: "What condition describes a person who suffers crisis?",
        choices: [
            "Pathological situation",
            "State of total partial mental disturbance",
            "Temporary state of disequilibrium",
            "State of shock"
        ],
        answer: 2,
        explanation: "A crisis is described as a temporary state of disequilibrium."
    },
    {
        number: 42,
        question: "This stage involves the disengagement phase which is a natural conclusion to any SW helping relationship, regardless of the nature of the client’s problem.",
        choices: [
            "Assessment",
            "Planning",
            "Intervention",
            "Termination"
        ],
        answer: 3,
        explanation: "Termination is the stage involving disengagement and the natural conclusion of the helping relationship."
    },
    {
        number: 43,
        question: "The problem about which the client is most concerned. This causes the current difficulty and in turn, the client perceives the need for help.",
        choices: [
            "Immediate Problem",
            "Root Problem",
            "Underlying Problem",
            "Working Problem"
        ],
        answer: 0,
        explanation: "The immediate problem is the concern causing the current difficulty and prompting the client to seek help."
    },
    {
        number: 44,
        question: "In defining the problem, this refers to the process of separating from so many problems identified by the client and/or worker the specific problem or problems which are to become the focus of the helping relationship.",
        choices: [
            "Prioritization",
            "Partialization",
            "Problem Identification",
            "Assessment"
        ],
        answer: 1,
        explanation: "Partialization involves narrowing the many identified problems to the specific problem or problems that will become the focus of the helping relationship."
    },
    {
        number: 45,
        question: "It is the act of directing a client to another worker/agency because the service that the client needs is beyond the present agency worker’s competence, or the client needs additional service the present agency cannot provide.",
        choices: [
            "Transfer",
            "Endorsement",
            "Referral",
            "Turn-over"
        ],
        answer: 2,
        explanation: "Referral is directing a client to another worker or agency when the needed service is beyond the current worker’s competence or agency’s capacity."
    },
    {
        number: 46,
        question: "In this approach there is an assumption that there is always a biological explanation for something. Every problem is assigned to organize because that requires a similar solution. Hence there is a tendency to view problems in pathological terms.",
        choices: [
            "Bio-medical approach",
            "Psycho-social approach",
            "Social welfare approach",
            "Rights-based approach"
        ],
        answer: 0,
        explanation: "The Bio-medical approach assumes biological explanations for problems and tends to view problems in pathological terms."
    },
    {
        number: 47,
        question: "The following are the known generic steps in the social work problem solving process, except one:",
        choices: [
            "Data-collection",
            "Data validation",
            "Assessment",
            "Goal Setting"
        ],
        answer: 1,
        explanation: "The provided source identifies Data validation as the exception."
    },
    {
        number: 48,
        question: "It is not just a cognitive process; it involves a relationship between two parties, the worker and the client system.",
        choices: [
            "Problem Solving Process",
            "Helping Process",
            "Scientific Method",
            "Helping Contract"
        ],
        answer: 1,
        explanation: "The Helping Process involves both problem-solving activities and the relationship between the worker and client system."
    },
    {
        number: 49,
        question: "It induces all the goal-related activities that the worker will undertake following the agreement forged with the client based on the problem to be worked on and the plan of action to be pursued. This phase in the helping process is concerned with action that would solve the client’s problems.",
        choices: [
            "Assessment",
            "Planning",
            "Intervention",
            "Evaluation"
        ],
        answer: 2,
        explanation: "Intervention is the action phase in which the worker carries out goal-related activities based on the agreed problem and plan of action."
    },
    {
        number: 50,
        question: "An interventive role of SWr concerned with direct provision of material aid and other concrete resources that will be useful in eliminating or reducing situational deficiencies. Here, concrete resources are mobilized, created, and directly provided to the client who is assisted in making optimal use of them.",
        choices: [
            "Mediator",
            "Resource Mobilizer",
            "Resource Provider",
            "Enabler"
        ],
        answer: 2,
        explanation: "The Resource Provider role involves directly providing material aid and concrete resources to reduce situational deficiencies."
    },
    {
        number: 51,
        question: "As data is gathered and reviewed, several problems would arise which need to be attended to; therefore, the worker has to identify which problems need to be addressed first, and consider the problems in order of importance.",
        choices: [
            "Assessment",
            "Partialization",
            "Problem Identification",
            "Prioritization"
        ],
        answer: 3,
        explanation: "Prioritization involves identifying which problems should be addressed first and considering them according to their importance."
    },
    {
        number: 52,
        question: "This tool uses a graphical representation of a person's family relationship and history. It is a unique type of family research diagram. It records family members and their relationships to each other. It also shows many of their physical and physiological attributes through an elaborate system of symbols.",
        choices: [
            "Resource Map",
            "Eco-map",
            "Genogram",
            "Venn Diagram"
        ],
        answer: 2,
        explanation: "A genogram graphically represents family relationships, history, and various attributes of family members using a system of symbols."
    },
    {
        number: 53,
        question: "The first professional School of Social Work established in 1898. Its establishment indicates that social work had sufficiently large body of knowledge and skills by that time.",
        choices: [
            "New York School",
            "University of the Philippines",
            "University of Santo Tomas",
            "Chicago School"
        ],
        answer: 0,
        explanation: "The provided source identifies the New York School as the first professional School of Social Work established in 1898."
    },
    {
        number: 54,
        question: "In the helping relationship, these are contributory factors that stand in the way of both remedy and prevention and must be dealt with if change is to take place.",
        choices: [
            "Immediate Problem",
            "Presenting Problem",
            "Underlying Problem",
            "Working Problem"
        ],
        answer: 3,
        explanation: "The provided source identifies the Working Problem as the contributory factors that must be dealt with for change to take place."
    },
    {
        number: 55,
        question: "An evaluation undertaken before ending a helping relationship. It is the time for the worker and the client, but particularly the worker who has been the helping person, to appraise what has transpired, to focus on the goals formulated, and whether the problem identified earlier were properly addressed.",
        choices: [
            "Periodic Evaluation",
            "Terminal Evaluation",
            "On-going Evaluation",
            "Formative Evaluation"
        ],
        answer: 1,
        explanation: "Terminal Evaluation is conducted before ending the helping relationship to assess what transpired, review goals, and determine whether identified problems were properly addressed."
    },
    {
        number: 56,
        question: "The social worker drawing from theoretical knowledge, observations and analytical skills evolving from her interaction with the clients makes a professional judgment of the latter’s functioning. This is referred to as:",
        choices: [
            "Diagnosis",
            "Recommendation",
            "Conclusion",
            "Assessment"
        ],
        answer: 3,
        explanation: "Assessment involves using theoretical knowledge, observations, and analytical skills to make a professional judgment about the client's functioning."
    },
    {
        number: 57,
        question: "She was an outstanding practitioner, teacher, and theoretician who formulated the first comprehensive statement of principles of direct social work practice. She published her first book in case work called “Social Diagnosis” in 1917.",
        choices: [
            "Mary Richmond",
            "Jane Addams",
            "Francis Mclean",
            "Thelma Lee Mendoza"
        ],
        answer: 0,
        explanation: "Mary Richmond was an influential social work practitioner and theoretician who published Social Diagnosis in 1917."
    },
    {
        number: 58,
        question: "The overall situation that is created and tends to perpetuate the immediate problem.",
        choices: [
            "Immediate Problem",
            "Presenting Problem",
            "Underlying Problem",
            "Working Problem"
        ],
        answer: 2,
        explanation: "The Underlying Problem refers to the overall situation that is created and tends to perpetuate the immediate problem."
    },
    {
        number: 59,
        question: "This principle in data collection implies that the SWr must collect only those data/information that has relevance to the situation at hand and is essential to the formulation of valid working judgments. It is gathering important information that are useful for the client’s case.",
        choices: [
            "Synthesis",
            "Relevance",
            "Parsimony",
            "Validity"
        ],
        answer: 2,
        explanation: "Parsimony in data collection means gathering only information that is relevant and essential to making valid working judgments."
    },
    {
        number: 60,
        question: "A client in a state of crisis is most likely to evidence:",
        choices: [
            "Reliance on prior patterns of coping",
            "Preoccupation with precipitating stress",
            "Resistance to change",
            "Reflection on earlier stress experiences"
        ],
        answer: 1,
        explanation: "A client experiencing crisis is likely to be preoccupied with the precipitating stress."
    },
    {
        number: 61,
        question: "The first professional method of social work intervention practiced in the Philippines was introduced by this organization in 1917. It was a family welfare agency that employed “home visitors”. Later on it was absorbed by the Bureau of Public Welfare to carry out its public assistance program.",
        choices: [
            "Associated Charities",
            "American Charity Organization Society",
            "Jose Fabella Center",
            "Philippine Association of Social Workers, Inc."
        ],
        answer: 0,
        explanation: "The provided source identifies Associated Charities as the organization that introduced the first professional method of social work intervention in the Philippines in 1917."
    },
    {
        number: 62,
        question: "In the process of the helping interview, which among the choices arranged the process in the right sequence? I. The core of helping process, comprises the identifying of, accepting of, validation of, and reflection of the person’s feelings. II. Worker explores basic crisis/problem and how the person seeking help views the situation; gathers information and explores what prompted the person to seek help. III. Generating alternative solutions together with the person seeking help; discussing possible resources. IV. Worker establishes relationship; creates a safe/helpful environment.",
        choices: [
            "IV, III, I, II",
            "IV, II, I, III",
            "IV, III, II, I",
            "II, III, IV, I"
        ],
        answer: 1,
        explanation: "The correct sequence is establishing the relationship and safe environment, exploring the crisis/problem, identifying and reflecting feelings, and then generating alternative solutions."
    },
    {
        number: 63,
        question: "It is based on the proposition that the human mind functions in a dualistic way.",
        choices: [
            "Transference",
            "Counter-Transference",
            "Ambivalence",
            "Bias"
        ],
        answer: 2,
        explanation: "Ambivalence reflects the coexistence of opposing or conflicting feelings, consistent with the proposition that the human mind functions in a dualistic way."
    },
    {
        number: 64,
        question: "It is a way of delivering services where a social worker assumes responsibility for assessing with a client what services he/she needs, and helps obtain those services for the client.",
        choices: [
            "Case Management",
            "Helping Process",
            "Social Services",
            "Social Welfare"
        ],
        answer: 0,
        explanation: "Case Management involves assessing the client's service needs and helping the client obtain the appropriate services."
    },
    {
        number: 65,
        question: "A method of engaging a client through relationship process, essentially one on one, in the use of social service towards his/her own and the general social welfare.",
        choices: [
            "Case Management",
            "Helping Process",
            "Casework",
            "Social Welfare"
        ],
        answer: 2,
        explanation: "Casework is a one-on-one method of engaging clients through a relationship process toward their own and general social welfare."
    },
    {
        number: 66,
        question: "The client of Social Worker A, who is a 23-year-old female drug dependent, shares with Social Worker A that she is already becoming attached to him and she also has “sexual fantasies” about him. The client is already asking Social Worker A to go out on a romantic date. What should the social worker do in this situation?",
        choices: [
            "Administer appropriate drug/medication to the client",
            "Discuss the client’s feelings about her sexual fantasies",
            "Clarify with the client the professional nature of the social worker-client relationship",
            "Immediately refer the client to a female social worker"
        ],
        answer: 2,
        explanation: "The social worker should clarify the professional boundaries and nature of the social worker-client relationship."
    },
    {
        number: 67,
        question: "In 1941, the Superintendent of Associated Charities of Manila (ACM) appreciated the value of psychiatric social work in the USA, thus, he employed social workers who functioned as caseworkers for children and youth.",
        choices: [
            "Dr. Jose Vergara",
            "Dr. Jose Fabella",
            "Josefa Jara-Martinez",
            "Frank Murphy"
        ],
        answer: 0,
        explanation: "The provided source identifies Dr. Jose Vergara as the Superintendent associated with this development in 1941."
    },
    {
        number: 68,
        question: "In treating a client in crisis, the caseworker should focus on:",
        choices: [
            "The immediate presenting problem",
            "A few specific problems in day-to-day functioning",
            "A wide range of problems in day-to-day functioning",
            "Underlying personality problems"
        ],
        answer: 0,
        explanation: "Crisis intervention focuses primarily on the immediate presenting problem rather than underlying personality problems or a broad range of issues."
    },
    {
        number: 69,
        question: "Treatment progress is sometimes quite rapid when working with a client in crisis because the client is:",
        choices: [
            "Best able to develop self-direction",
            "In a state of equilibrium",
            "Free of expectations",
            "More receptive to accepting help due to a greater state of vulnerability"
        ],
        answer: 3,
        explanation: "Clients in crisis may be more receptive to accepting help because their heightened vulnerability can make them more open to assistance."
    },
    {
        number: 70,
        question: "The primary purpose of a service/intervention plan is to:",
        choices: [
            "Establish goals",
            "Monitor behavioral changes",
            "Assess the home situation",
            "Evaluate client progress"
        ],
        answer: 0,
        explanation: "The primary purpose of a service/intervention plan is to establish goals for the helping intervention."
    },
    {
        number: 71,
        question: "The earliest organized effort on casework in the USA was the establishment of this organization in 1877. It used volunteers called “FRIENDLY VISITORS”. The aims of the society were to find out the ways and means of helping the poor and needy to organize individualized service for them.",
        choices: [
            "American Charity Organization Society",
            "Association for Improving the Condition of the Poor",
            "Associated Charities",
            "Hull House"
        ],
        answer: 0,
        explanation: "The American Charity Organization Society is identified as the earliest organized effort on casework in the USA and used volunteers known as Friendly Visitors."
    },
    {
        number: 72,
        question: "In this period, the most promising development increased stress on importance of research. Social action was more focused to bring about change in the society. Casework method adopted new techniques and principles.",
        choices: [
            "1940s",
            "1950s",
            "1960s",
            "1970s"
        ],
        answer: 2,
        explanation: "The provided source identifies the 1960s as the period characterized by increased emphasis on research, social action, and new casework techniques and principles."
    },
    {
        number: 73,
        question: "The following are primary objectives of conducting social work interview, except one:",
        choices: [
            "To obtain information",
            "To give counselling to the client and allow him/her to express his/her feelings",
            "To help individual arrive at the right solution of his problem",
            "To give help to individual"
        ],
        answer: 1,
        explanation: "The provided source identifies giving counselling to the client and allowing the client to express feelings as the exception."
    },
    {
        number: 74,
        case: "case2",
        question: "Marina is a 30-year-old mother of six young children. She is a very religious person. Recently, she gave birth to a baby boy with complications, thus, she was referred by the hospital to your agency to seek help. During the intake interview, Marina also complained about her husband being a drunkard. The husband also wants Marina to have more babies as they are “blessing from heaven”. The social worker therefore strongly advised Marina for the use of pills as a method of contraception, which she herself found very effective in preventing another pregnancy. But Marina is having second thoughts. What principle should the social worker observe in this kind of situation?",
        choices: [
            "Self awareness",
            "Controlled emotional involvement",
            "Acceptance",
            "Purposeful expression of feelings"
        ],
        answer: 0,
        explanation: "Self awareness requires the social worker to recognize personal values and preferences and avoid imposing them on the client."
    },
    {
        number: 75,
        case: "case2",
        question: "In motivating couples to use a family planning method, which of the following interventions is most appropriate?",
        choices: [
            "Family therapy",
            "Crisis intervention",
            "Counseling",
            "Behavior modification"
        ],
        answer: 2,
        explanation: "Counseling is the most appropriate intervention for helping couples discuss family planning and make informed decisions."
    },
        {
        number: 76,
        case: "case2",
        question: "What would be the most effective point of entry in motivating Marina to practice family planning?",
        choices: [
            "Care of the children",
            "Husband being a drunkard",
            "The baby’s fragile health",
            "Religion"
        ],
        answer: 2,
        explanation: "The baby’s fragile health is the most effective point of entry because it provides a relevant and immediate concern that can help motivate Marina to consider family planning."
    },
    {
        number: 77,
        case: "case2",
        question: "What should be the focus of the social worker in delivering initial interventions for Marina?",
        choices: [
            "Acceptance",
            "Non-judgmental attitude",
            "Individualization",
            "Client self-determination"
        ],
        answer: 3,
        explanation: "Client self-determination should be the focus, respecting Marina’s right to make her own informed decisions regarding family planning."
    },
    {
        number: 78,
        case: "case2",
        question: "In motivating a couple for family planning, the social worker should be knowledgeable and comfortable in discussing with couples the:",
        choices: [
            "Right of a Woman to her own body",
            "Making Informed choices",
            "Types of contraceptions",
            "Child rearing"
        ],
        answer: 1,
        explanation: "Making informed choices allows couples to understand their options and make decisions regarding family planning based on adequate information."
    },
    {
        number: 79,
        question: "A holistic approach in SW advocated in the Philippines in the late 1960's, where there is one client system (any) as point of entry for working with other client systems, involves total problem solving and the client's problem situation is the basis for the choice of the worker's helping approach and not the worker’s method of specialization.",
        choices: [
            "Task-Centered",
            "Generalist",
            "Functional",
            "Client-centered"
        ],
        answer: 1,
        explanation: "The Generalist approach uses a holistic perspective, where the client's problem situation determines the helping approach rather than the worker's specialization."
    },
    {
        number: 80,
        question: "A process of identifying individuals, groups, organizations or even government agencies who can be potential donors, benefactors, and sponsors to support programs and services for the marginalized sectors of our society.",
        choices: [
            "Resource Mobilization",
            "Casework",
            "Resource Acquisition",
            "Resource Generation"
        ],
        answer: 3,
        explanation: "Resource Generation involves identifying potential donors, benefactors, sponsors, and other sources of support for programs and services."
    },
    {
        number: 81,
        question: "It is the type of major services in a child institution wherein the social worker rendered in the form of (a) assistance to children in their own homes in the form of material assistance, formal and/or informal educational services, sports and recreation, health services, skills training, job placement, guidance and counseling, day care and correctional services, and (b) child placement through residential care in an institution, foster care or adoption.",
        choices: [
            "Direct Practice",
            "Direct Service",
            "Indirect Practice",
            "Indirect Service"
        ],
        answer: 1,
        explanation: "Direct Service refers to services provided directly to children and families, including material assistance, education, health services, counseling, residential care, foster care, and adoption."
    },
    {
        number: 82,
        question: "This approach uses broader perspective compared to the biomedical approach. This translates into the way problems and solutions are framed. For example, after the presenting problem has been analyzed in terms of personal and social factors, appropriate strategies will be designed to address both factors.",
        choices: [
            "Bio-medical approach",
            "Psycho-social approach",
            "Social welfare approach",
            "Rights-based approach"
        ],
        answer: 1,
        explanation: "The Psycho-social approach considers both personal and social factors when understanding problems and designing appropriate interventions."
    },
    {
        number: 83,
        question: "It is a non-statutory meeting organized by social work services to consult with other agencies to collate information about child and family.",
        choices: [
            "Counseling",
            "Case Conference",
            "Therapy",
            "None of the above"
        ],
        answer: 1,
        explanation: "A Case Conference is a non-statutory meeting where social work services consult with other agencies and gather information about a child and family."
    },
    {
        number: 84,
        question: "It is derived from learning theory. This approach is based on the idea that people expect their behavior to lead to meaningful, satisfactory outcomes, and when the behavior does so, expected and desired rewards reinforces the particular way of behavior (reward and punishments).",
        choices: [
            "Cognitive behavioral",
            "Behavioral Modification",
            "Social Learning",
            "Crisis intervention"
        ],
        answer: 1,
        explanation: "Behavioral Modification is derived from learning theory and uses rewards and punishments to reinforce or change particular behaviors."
    },
    {
        number: 85,
        case: "case3",
        question: "What basic data do you need in order to assess the child’s social situation?",
        choices: [
            "Psychological test result",
            "Report of houseparent",
            "Medical exam result",
            "Family history/ background"
        ],
        answer: 3,
        explanation: "Family history/background provides essential information for understanding the child's social situation and family context."
    },
    {
        number: 86,
        case: "case3",
        question: "In working with this client, who should be the primary source of information?",
        choices: [
            "The child",
            "The child’s parents",
            "The houseparents",
            "Other family members"
        ],
        answer: 1,
        explanation: "The child’s parents are identified as the primary source of information for assessing the child's situation."
    },
    {
        number: 87,
        case: "case3",
        question: "When you collect initial information on the child’s current development, what important task of the helping process have you completed?",
        choices: [
            "Data gathering",
            "Assessment",
            "Problem identification",
            "Evaluation"
        ],
        answer: 0,
        explanation: "Collecting initial information on the child's current development is part of the data-gathering task."
    },
    {
        number: 88,
        case: "case3",
        question: "What immediate data do you need to complete an initial assessment on the child’s current level of functioning?",
        choices: [
            "Child’s growth and development",
            "Family history",
            "Child’s medical condition",
            "Psychological test result"
        ],
        answer: 0,
        explanation: "Information about the child's growth and development is needed to assess the child's current level of functioning."
    },
    {
        number: 89,
        case: "case3",
        question: "Which of the following techniques in data gathering is the most appropriate in working with a three-year-old child?",
        choices: [
            "Use of questions answerable by yes or no",
            "Use of “why” questions",
            "Use of play activities",
            "Use of open-ended questions"
        ],
        answer: 2,
        explanation: "Play activities are the most appropriate technique for gathering information from a three-year-old child."
    },
    {
        number: 90,
        question: "Also known as the diagnostic approach, concerned with inner realities of the individual, his emotional, mental, and social processes and the social context in which he lives. It has a strong orientation on the use of the concept of ego and ego psychology for understanding in-depth social functioning.",
        choices: [
            "Functional",
            "Psycho-social",
            "Task centered",
            "Diagnosis Approach"
        ],
        answer: 1,
        explanation: "The Psycho-social approach focuses on the individual's emotional, mental, and social processes and the social context in which the person lives."
    },
    {
        number: 91,
        question: "The most common approach utilized by service organizations in the Philippines because of the all-pervading poverty situation in the country. The process includes a definition of the service being offered and how the client will be able to use it toward his/her own welfare. Emphasis on the use of time and the use of agency function; the giving and receiving help.",
        choices: [
            "Cognitive behavioral",
            "Transactional Analysis",
            "Functional Approach",
            "Crisis intervention"
        ],
        answer: 2,
        explanation: "The Functional Approach emphasizes the agency's function, the use of time, and the giving and receiving of help."
    },
    {
        number: 92,
        question: "The casework model of practice in the Philippines fundamentally follows this framework:",
        choices: [
            "Classical Freudian Theory",
            "Psychosocial model",
            "Ecological systems model",
            "Direct Provision Framework"
        ],
        answer: 2,
        explanation: "The Ecological systems model is identified as the fundamental framework followed by the casework model of practice in the Philippines."
    },
    {
        number: 93,
        question: "A walk-in client comes to an agency and sought for the social worker’s assistance to provide for his family’s need but the social worker noticed that he is the same person who also asked for their assistance two weeks ago. Before giving goods, the social worker asked pertinent facts about the client then assisted the client to come-up with solutions of his problems. The social worker was guided with the principle of?",
        choices: [
            "Acceptance of People as they are",
            "Confidentiality",
            "Participation of the Client in Problem Solving",
            "Client’s Self-Determination"
        ],
        answer: 3,
        explanation: "Client’s Self-Determination recognizes the client's right and responsibility to participate in making decisions and developing solutions to problems."
    },
    {
        number: 94,
        question: "An employer called the social worker in an agency asking about the background of their child-in-conflict with the law who is applying for work. The client was a previous agency’s client who had undergone intervention program and was able to integrate with the community. The social worker shall be guided with the principle of:",
        choices: [
            "Acceptance of People as they are",
            "Confidentiality",
            "Participation of the Client in Problem Solving",
            "Client’s Self-Determination"
        ],
        answer: 1,
        explanation: "Confidentiality requires the social worker to protect the client's personal information and not disclose it without proper authorization."
    },
    {
        number: 95,
        question: "A child in conflict with the law was found to be a habitual delinquent in the community when the barangay police endorse it to the social worker. In dealing with the CICL, the social worker shall be guided with the principle of:",
        choices: [
            "Acceptance",
            "Individualization",
            "Participation of the Client in Problem Solving",
            "Client’s Self-Determination"
        ],
        answer: 0,
        explanation: "Acceptance requires the social worker to accept the client as a person while addressing the client's situation and needs."
    },
    {
        number: 96,
        question: "A fraternity group involved in a riot in the community and caused serious physical injuries to their adversaries was endorsed to the Local Social Worker in compliance with RA 9344. The social worker shall be guided with what particular principle in dealing in providing interventions with each member of the fraternity group?",
        choices: [
            "Acceptance",
            "Individualization",
            "Participation of the Client in Problem Solving",
            "Client’s Self-Determination"
        ],
        answer: 1,
        explanation: "Individualization means recognizing that each client is unique and should be assessed and treated according to their individual circumstances and needs."
    },
    {
        number: 97,
        question: "A drug dependent client who came from a rich and famous family is courting the social worker assigned in the agency. The social worker shall observe the principles of:",
        choices: [
            "Acceptance of People as they are",
            "Client-Worker Relationship",
            "Participation of the Client in Problem Solving",
            "Worker’s Self-Awareness"
        ],
        answer: 1,
        explanation: "The Client-Worker Relationship principle requires the social worker to maintain appropriate professional boundaries in the helping relationship."
    },
    {
        number: 98,
        question: "Was the first settlement house, established in 1884 in London; many others were soon formed in larger US cities.",
        choices: [
            "Hull House in Chicago",
            "Charity Organization Society (COS)",
            "Society for the Development and Progress",
            "Toynbee Hall"
        ],
        answer: 3,
        explanation: "Toynbee Hall was the first settlement house, established in London in 1884."
    },
    {
        number: 99,
        question: "The most noted leader in the settlement house movement was of the Hull House in Chicago who summarized settlement house as follows: The Settlement, then is an experimental effort to aid in the solutions of the social and industrial problems which are endangered by the modern conditions of life in great city.",
        choices: [
            "Jane Adams",
            "Richard Cabot",
            "Mary Richmond",
            "John Griscom"
        ],
        answer: 0,
        explanation: "Jane Adams was the noted leader of the Hull House in Chicago and a prominent figure in the settlement house movement."
    },
    {
        number: 100,
        question: "There are three (3) identifiable approaches have evolved in the practice of helping children in the Philippines and each had its own specific assumptions about children’s vulnerabilities and competencies except one.",
        choices: [
            "Bio-medical approach",
            "Psycho-social approach",
            "Social welfare approach",
            "Rights-based approach"
        ],
        answer: 2,
        explanation: "Social welfare approach is identified as the exception among the three approaches described in the source."
    }

];

const caseStudies = {

    case1: {
        title: "Case 1",
        story: `The report of a houseparent on Pamela, 7 years old,
        indicated the following information: "She is very unruly in
        the center, she cannot relate well with her co-clients, very
        undisciplined in the school, aggressive, and often tells lies
        and constantly violates the center regulations."

        Pamela, as you know was rescued from the street by your
        organization. When she was rescued, she disclosed that her
        father sexually molested her also. That is why she ran away
        from home. She has a 10-year old half-brother and her mother
        already had a new partner.`
    },

    case2: {
        title: "Case 2",
        story: `Marina is a 30-year-old mother of six young children. She is a very religious
        person. Recently, she gave birth to a baby boy with complications, thus, she was referred by the
        hospital to your agency to seek help. During the intake interview, Marina also complained about her
        husband being a drunkard. The husband also wants Marina to have more babies as they are
        “blessing from heaven”. The social worker therefore strongly advised Marina for the use of pills
        as a method of contraception, which she herself found very effective in preventing another
        pregnancy. But Marina is
        having second thoughts.`
    },

    case3: {
        title: "Case 3",
        story: `You were employed in a social work agency catering to needs of children in need of special
        protection. Your supervisor has just asked you to complete an assessment on a three-year-old girl
        who was recently admitted into the center.`
    }


};