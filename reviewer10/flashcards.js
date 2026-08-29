const flashcards = [
    {
        number: 1,
        question: "It is the creation of new knowledge and the use of existing one in a new and creative way to generate new concepts, methodologies, and understanding.",
        choices: [
            "Statistics",
            "Research",
            "Research and Statistics",
            "Supervision"
        ],
        answer: 1,
        explanation: "Research is the creation of new knowledge and the use of existing knowledge in new and creative ways to generate new concepts, methodologies, and understanding."
    },
    {
        number: 2,
        question: "This is a type of educational research in which the researcher relies on the views of participants, asks broad and general questions, collects data, describes and analyzes for themes, and conducts the inquiry in a subjective manner.",
        choices: [
            "Discourse Analysis",
            "Qualitative",
            "Quantitative",
            "Phenomenology"
        ],
        answer: 1,
        explanation: "Qualitative research relies on participants' views, broad questions, data collection, thematic analysis, and a subjective approach."
    },
    {
        number: 3,
        question: "It is one of Fayol's Principles of Management that states that a worker should have only one direct supervisor.",
        choices: [
            "Discipline",
            "Unity of Direction",
            "Unity of Command",
            "Manager"
        ],
        answer: 2,
        explanation: "Unity of Command means that each worker should receive orders from only one direct supervisor."
    },
    {
        number: 4,
        question: "This helps social workers analyze data to make informed decisions, assess needs, measure outcomes, and advocate for policies and practices that benefit individuals and communities.",
        choices: [
            "Client's participation",
            "Client's self-determination",
            "Social Work Statistics",
            "Research"
        ],
        answer: 2,
        explanation: "Social Work Statistics helps social workers analyze data, assess needs, measure outcomes, and support evidence-based decisions and advocacy."
    },
    {
        number: 5,
        question: "The part of the research where you state the theory or theories that explain the connection or relationship between variables in a quantitative study is called.",
        choices: [
            "Research questions",
            "Theoretical Framework",
            "Theoretical Lens",
            "Hypothesis"
        ],
        answer: 1,
        explanation: "The Theoretical Framework presents the theory or theories that explain the relationships among variables in a quantitative study."
    },
    {
        number: 6,
        question: "These are facts and statistics that are collected for reference and analysis.",
        choices: [
            "Data",
            "Variable",
            "Measurement",
            "Nominal"
        ],
        answer: 0,
        explanation: "Data are facts and statistics collected for reference and analysis."
    },
    {
        number: 7,
        question: "There are four levels of measurement: Nominal, Ordinal, Interval, and Ratio. Which of these has an absolute zero?",
        choices: [
            "Nominal",
            "Ordinal",
            "Interval",
            "Ratio"
        ],
        answer: 3,
        explanation: "Ratio measurement has an absolute zero, allowing meaningful comparisons of ratios between values."
    },
    {
        number: 8,
        question: "Administration, supervision and research are examples of?",
        choices: [
            "Primary methods of social work",
            "Secondary method of social work",
            "Primary setting of social work",
            "Secondary setting of social work"
        ],
        answer: 1,
        explanation: "Administration, supervision, and research are classified as secondary methods of social work."
    },
    {
        number: 9,
        question: "It is a type of organization that receives some form of subsidy from the government.",
        choices: [
            "Public agencies",
            "Government agencies",
            "Semi or quasi government organization",
            "Social Welfare Agencies"
        ],
        answer: 2,
        explanation: "Semi or quasi government organizations receive some form of government subsidy while operating with organizational characteristics distinct from regular government agencies."
    },
    {
        number: 10,
        question: "In the levels of management, this type includes the CEO, President, and Board of Directors. They are responsible for the overall performance and direction of the entire organization.",
        choices: [
            "Top management",
            "Middle management",
            "First-line management",
            "Supervisory management"
        ],
        answer: 0,
        explanation: "Top management includes positions such as the CEO, President, and Board of Directors and is responsible for the organization's overall direction."
    },
    {
        number: 11,
        question: "This refers to sources from the accounts of eyewitnesses. These are actual observer or participant reports about an event.",
        choices: [
            "Primary source",
            "Secondary source",
            "Third party source",
            "Oral testimony"
        ],
        answer: 0,
        explanation: "A primary source comes directly from an eyewitness, observer, or participant who provides an account of an event."
    },
    {
        number: 12,
        question: "It refers to a repeated study on the same subject or research problem. Its purpose is to verify and confirm the initial findings of the study.",
        choices: [
            "Thesis review",
            "Replications",
            "Remains",
            "Documents"
        ],
        answer: 1,
        explanation: "Replication involves repeating a study to verify and confirm its initial findings."
    },
    {
        number: 13,
        question: "\"Follow my instructions exactly as given.\" This statement is an example of what type of leadership?",
        choices: [
            "Democratic",
            "Autocratic",
            "Laissez-faire",
            "None of the above"
        ],
        answer: 1,
        explanation: "Autocratic leadership involves the leader giving direct instructions and expecting them to be followed."
    },
    {
        number: 14,
        question: "The relationship in this style of leadership is based on an exchange.",
        choices: [
            "Transformational",
            "Transactional",
            "Servant",
            "Charismatic"
        ],
        answer: 1,
        explanation: "Transactional leadership is based on an exchange between the leader and followers, such as rewards for performance."
    },
    {
        number: 15,
        question: "A school administrator has a list of 500 students and needs to select 50 respondents for a survey on students' satisfaction with school facilities. Starting from a randomly chosen number between 1 and 10, every 10th student on the list is selected until the required sample size is reached. How are the respondents being selected?",
        choices: [
            "Probability sampling",
            "Simple random sampling",
            "Systematic sampling",
            "Stratified sampling"
        ],
        answer: 2,
        explanation: "Systematic sampling selects respondents at a regular interval from an ordered list after choosing a random starting point."
    },
    {
        number: 16,
        question: "This consists of generalizing from sample to populations, performing estimations and hypothesis tests, determining relationships among variables, and making predictions.",
        choices: [
            "Population",
            "Sample",
            "Hypothesis",
            "Inferential Statistics"
        ],
        answer: 3,
        explanation: "Inferential Statistics uses sample data to make generalizations, estimates, hypothesis tests, relationship determinations, and predictions about populations."
    },
    {
        number: 17,
        question: "A researcher is interested in understanding how indigenous communities perceive and experience government welfare programs. The study involves prolonged engagement with the community, including interviews and observations. What qualitative research design best fits this study?",
        choices: [
            "Ethnography",
            "Phenomenology",
            "Case study",
            "Grounded Theory"
        ],
        answer: 0,
        explanation: "Ethnography is appropriate for prolonged engagement with a community to understand its experiences, perceptions, and practices through methods such as interviews and observations."
    },
    {
        number: 18,
        case: "case1",
        question: "What is the frequency of the data?",
        choices: [
            "13",
            "17",
            "12",
            "14"
        ],
        answer: 0,
        explanation: "Total Frequency = 2 + 6 + 4 + 1 = 13. Therefore, the frequency is 13."
    },
    {
        number: 19,
        case: "case1",
        question: "What is the mean of the salary?",
        choices: [
            "38,615",
            "34,769",
            "10,692",
            "27,560"
        ],
        answer: 1,
        explanation: "Using the weighted mean: (25,000×2) + (30,000×6) + (46,000×4) + (38,000×1) = 452,000. Then 452,000 ÷ 13 = 34,769."
    },
    {
        number: 20,
        case: "case1",
        question: "What is the median of the salaries?",
        choices: [
            "30,000",
            "46,000",
            "38,000",
            "25,000"
        ],
        answer: 0,
        explanation: "After arranging the salaries according to frequency, the middle value or 7th value is 30,000. The median refers to the center value, not the highest frequency."
    },
    {
        number: 21,
        case: "case1",
        question: "What is the mode of the salary?",
        choices: [
            "30,000",
            "46,000",
            "38,000",
            "25,000"
        ],
        answer: 0,
        explanation: "The mode is the value that occurs most frequently. In this data set, 30,000 occurs most often."
    },
    {
        number: 22,
        question: "What is the weighted mean?",
        choices: [
            "The weighted mean is the average in which each data point is assigned a specific level of importance.",
            "The weighted mean is calculated by summing all the value and then dividing the sum by the number of values.",
            "The weighted mean is the sum of the given data.",
            "All choices are correct."
        ],
        answer: 0,
        explanation: "A weighted mean is an average in which each data point is assigned a specific level of importance or weight."
    },
    {
        number: 23,
        question: "A statistical technique that is useful for exploring the relationship between two or more variables and is widely used for prediction and forecasting.",
        choices: [
            "Correlation",
            "Chi-square",
            "Regression",
            "ANOVA"
        ],
        answer: 2,
        explanation: "Regression is used to explore relationships among variables and is widely used for prediction and forecasting."
    },
    {
        number: 24,
        question: "In a professional development group, members are experienced, mature, and responsible individuals who actively contribute to each other's growth. There is no designated supervisor and they operate as equals. What type of supervision does the scenario show?",
        choices: [
            "Group supervision",
            "Peer group supervision",
            "Case consultation",
            "Tandem supervision"
        ],
        answer: 1,
        explanation: "Peer group supervision involves members who operate as equals, without a designated supervisor, and contribute to one another's professional growth."
    },
    {
        number: 25,
        question: "A social work researcher wants to explore the lived experiences of homeless families relocated to a government-provided housing project. The study aims to understand their challenges and coping mechanisms through in-depth interviews. Which research method is most appropriate?",
        choices: [
            "Qualitative",
            "Quantitative",
            "Mixed Method",
            "Abductive"
        ],
        answer: 0,
        explanation: "Qualitative research is appropriate for exploring lived experiences, challenges, and coping mechanisms through in-depth interviews."
    },
    {
        number: 26,
        question: "The idea of sampling is to select a portion of the larger population and study that portion to gain information about the population. Data are the result of sampling from a population.",
        choices: [
            "First statement is correct. Second statement is incorrect.",
            "Both statements are correct.",
            "Both statements are incorrect.",
            "First statement is incorrect. Second statement is correct."
        ],
        answer: 1,
        explanation: "Both statements are correct according to the provided material: sampling selects a portion of a population, and data result from sampling from a population."
    },
    {
        number: 27,
        question: "In presidential elections, opinion poll samples of 1,000–2,000 people are taken. The opinion poll is supposed to represent the views of the people in the entire country. Identify the sample in the statement.",
        choices: [
            "Entire country",
            "1,000–2,000",
            "The view of the people",
            "None of the above"
        ],
        answer: 1,
        explanation: "The sample is the 1,000–2,000 people selected for the opinion poll, while the entire country represents the population."
    },
    {
        number: 28,
        question: "A written statement formally adopted by the board or legal authority and publicly made known to guide the provision of service.",
        choices: [
            "Policy",
            "Agency policy",
            "Public policy",
            "None of the above"
        ],
        answer: 1,
        explanation: "Agency policy is a written statement formally adopted by the board or legal authority and made known to guide service provision."
    },
    {
        number: 29,
        question: "Arrange the public policy making cycle in the Philippines: I. Policy Evaluation II. Policy Legitimization III. Policy Implementation IV. Agenda Setting V. Policy Formulation",
        choices: [
            "IV, V, II, III, I",
            "I, II, III, IV, V",
            "V, IV, III, IV, I",
            "II, V, III, I, IV"
        ],
        answer: 0,
        explanation: "The correct sequence is Agenda Setting → Policy Formulation → Policy Legitimization → Policy Implementation → Policy Evaluation."
    },
    {
        number: 30,
        question: "A unit of planned purposive action.",
        choices: [
            "Program",
            "Programming",
            "Policy",
            "Supervision"
        ],
        answer: 0,
        explanation: "A program is a unit of planned purposive action."
    },
    {
        number: 31,
        question: "Which organizational model relies most heavily on formal hierarchy?",
        choices: [
            "Democratic",
            "Collegial",
            "Adhocracy",
            "Bureaucratic"
        ],
        answer: 3,
        explanation: "The bureaucratic model relies heavily on formal hierarchy, defined authority, and structured procedures."
    },
    {
        number: 32,
        question: "In collegial model, members are usually connected through:",
        choices: [
            "Strict chain of command",
            "Military-style authority",
            "Collaborative communication",
            "Individual competition"
        ],
        answer: 2,
        explanation: "The collegial model emphasizes collaborative communication among members."
    },
    {
        number: 33,
        question: "Why is democratic organization often considered more inclusive?",
        choices: [
            "Decisions are made only by leaders",
            "Employees participate in decision-making",
            "Authority is concentrated at the top",
            "Communication is limited"
        ],
        answer: 1,
        explanation: "Democratic organizations are considered more inclusive because employees participate in decision-making."
    },
    {
        number: 34,
        question: "Which organizational model combines flexibility with some level of hierarchy?",
        choices: [
            "Bureaucratic",
            "Democratic",
            "Adhocracy",
            "Collegial"
        ],
        answer: 2,
        explanation: "Adhocracy combines flexibility with some level of hierarchy and is designed to adapt to changing situations."
    },
    {
        number: 35,
        question: "What is the main feature of adhocracy?",
        choices: [
            "Strict top-to-bottom authority",
            "Employee voting only",
            "Blend of bureaucratic and democratic characteristics",
            "Complete absence of leadership"
        ],
        answer: 2,
        explanation: "According to the provided material, adhocracy is characterized by a blend of bureaucratic and democratic characteristics."
    },
    {
        number: 36,
        case: "case2",
        question: "What happened to Maria in the company?",
        choices: [
            "Promotion",
            "Demotion",
            "Transfer",
            "Resignation"
        ],
        answer: 2,
        explanation: "Maria experienced a transfer."
    },
    {
        number: 37,
        case: "case2",
        question: "What happened to John in the company?",
        choices: [
            "Transfer",
            "Promotion",
            "Suspension",
            "Retirement"
        ],
        answer: 1,
        explanation: "John experienced a promotion."
    },
    {
        number: 38,
        case: "case2",
        question: "Transfer is considered what type of movement in an organization?",
        choices: [
            "Vertical",
            "Diagonal",
            "Horizontal",
            "Temporary"
        ],
        answer: 2,
        explanation: "A transfer is horizontal movement because the employee changes position while maintaining the same rank or level."
    },
    {
        number: 39,
        case: "case2",
        question: "If an employee changes but keeps the same rank and salary, this is called.",
        choices: [
            "Promotion",
            "Demotion",
            "Transfer",
            "Retirement"
        ],
        answer: 2,
        explanation: "A transfer occurs when an employee changes position while keeping the same rank and salary."
    },
    {
        number: 40,
        case: "case2",
        question: "Which employees experienced vertical movement?",
        choices: [
            "Maria",
            "Both Maria and John",
            "John",
            "Neither of them"
        ],
        answer: 2,
        explanation: "John experienced vertical movement because his promotion represents movement to a higher organizational level."
    },
    {
        number: 41,
        question: "It is the ability of an individual to influence, motivate, and enable others to contribute toward the effectiveness and successes of the organization of which they are members.",
        choices: [
            "Leadership",
            "Manager",
            "Human enterprise",
            "Administrator"
        ],
        answer: 0,
        explanation: "Leadership is the ability to influence, motivate, and enable others to contribute toward organizational effectiveness and success."
    },
    {
        number: 42,
        question: "Networking has the following purposes except one:",
        choices: [
            "Maximize scarce resources of partner agencies",
            "For mass action and collaboration",
            "For monitoring of other organization's activities",
            "To avoid duplication of programs and services among organizations"
        ],
        answer: 2,
        explanation: "Networking is intended to maximize resources, promote collaboration, and avoid duplication of services. Monitoring another organization's activities is not identified as its purpose in the provided material."
    },
    {
        number: 43,
        question: "The tutorial model of supervision is best for.",
        choices: [
            "Experienced supervisee",
            "Peer group",
            "Inexperienced supervisees",
            "Team"
        ],
        answer: 2,
        explanation: "The tutorial model of supervision is best suited for inexperienced supervisees who need guidance and instruction."
    },
    {
        number: 44,
        question: "A review of the literature prior to formulating research questions allows the researcher to.",
        choices: [
            "Provide an up-to-date understanding of the subject, its significance, and structure.",
            "Guide the development of research questions",
            "Present the kind of research methodologies used in previous studies.",
            "All of the above"
        ],
        answer: 3,
        explanation: "A literature review provides an up-to-date understanding of the topic, guides research questions, and presents methodologies used in previous studies."
    },
    {
        number: 45,
        question: "To calculate the median correctly, what must be done?",
        choices: [
            "Arrange all the data in random order",
            "Add all the data",
            "Arrange all the data in an ascending or descending order",
            "All of the above"
        ],
        answer: 2,
        explanation: "The data must first be arranged in ascending or descending order so the middle value can be identified."
    },
    {
        number: 46,
        question: "A researcher wants to study the effect of online learning on the academic performance of senior high school students in a public school. The researcher gathered the average monthly grades of Grade 12 students from June 2023 to March 2026. The purpose of the study is to identify whether students' academic performance improved, declined, or remained stable over time after the implementation of online learning strategies. What statistical technique did the research use?",
        choices: [
            "Statistical Analysis",
            "Regression Analysis",
            "Time Series Analysis",
            "Thematic Analysis"
        ],
        answer: 2,
        explanation: "Time Series Analysis examines data collected over successive time periods to identify patterns, trends, increases, decreases, or stability over time."
    },
    {
        number: 47,
        question: "A type of observation where the researcher observes the behavior in secret or without the participant's knowledge.",
        choices: [
            "Non-participant observation",
            "Participant observation",
            "Overt observation",
            "Covert observation"
        ],
        answer: 3,
        explanation: "Covert observation occurs when the researcher observes behavior secretly or without the participants' knowledge."
    },
    {
        number: 48,
        case: "case3",
        question: "Which statement best explains the difference between the data presentation methods used by Zoro and Luffy?",
        choices: [
            "Zoro used textual presentation, while Luffy used graphical presentation.",
            "Zoro used tabular presentation, while Luffy used textual presentation.",
            "Both researchers used graphical presentation.",
            "Both researchers used tabular presentation."
        ],
        answer: 1,
        explanation: "Zoro used tabular presentation, while Luffy used textual presentation."
    },
    {
        number: 49,
        case: "case3",
        question: "If Zoro wanted to present the increase or decrease in study hours visually, which method would be most suitable?",
        choices: [
            "Textual method",
            "Graphical method",
            "Narrative method",
            "Tabular method only"
        ],
        answer: 1,
        explanation: "A graphical method is most suitable for visually showing increases or decreases in study hours."
    },
    {
        number: 50,
        case: "case3",
        question: "Which of the following best describes the similarity between the studies of Zoro and Luffy?",
        choices: [
            "Both used graphs to interpret the data.",
            "Both presented findings only in paragraph form.",
            "Both researchers collected and presented data from respondents.",
            "Both studies focused on experimental research."
        ],
        answer: 2,
        explanation: "Both researchers collected and presented data from respondents."
    }
];

const caseStudies = {

    case1: {
    title: "Case 1",

    table: `
ANNUAL SALARY    FREQUENCY
25,000           2
30,000           6
46,000           4
38,000           1
`
},

    case2: {
        title: "Case 2",
        story: `Maria has been working as a customer service representative in a company for three years. Recently, the management decided to assign her to another department where she will still handle customer concerns with the same salary and responsibilities. Meanwhile, her co-worker John was assigned as a team supervisor with higher salary, greater responsibilities, and more authority over employees.`
    },

    case3: {
        title: "Case 3",
        story: `Zoro, a researcher, conducted a study on the study habits of first-year students. After gathering the data through a survey, he organized the responses into tables showing the frequency and percentage of students according to the number of hours they study daily. On the other hand, Luffy, another researcher, conducted a study on the reading preferences of second-year students and described the findings in paragraph form, explaining that most students preferred digital reading materials over printed books.`
    }
};
