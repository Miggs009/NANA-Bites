const flashcards = [
    {
        number: 1,
        question: "In understanding Filipino personality, the Ma’aram concept primarily refers to which dimension of Filipino personhood?",
        choices: [
            "Muni, Bait, Dungan, Hatol, Kalag",
            "Buot, Budhi, Katauhang Palabas, Katauhang Panloob",
            "Bait, Hatol, Budhi",
            "Ginhanwa, Kalag, Isip, Dungan, Buot"
        ],
        answer: 3,
        explanation: "Ma’aram refers to Ginhanwa, Kalag, Isip, Dungan, and Buot in the dimensions of Filipino personhood."
    },
    {
        number: 2,
        question: "According to Sikolohiyang Pilipino, Baltazar represents which dimension of Filipino personhood?",
        choices: [
            "Katauhang Panloob, Katauhang Palabas, Budhi",
            "Muni, Hatol, Bait",
            "Dungan, Kaluluwa, Bait",
            "Kalag, Buot, Bait, Hatol, Dungan"
        ],
        answer: 1,
        explanation: "Baltazar represents Muni, Hatol, and Bait."
    },
    {
        number: 3,
        question: "In the study of Filipino personality according to Virgilio Enriquez, the concept of Covar refers to which aspect of Filipino personhood?",
        choices: [
            "Katauhang Panloob, Katauhang Palabas, Kaluluwa, Budhi",
            "Katauhang Panloob, Katauhang Panlabas, Muni, Bait",
            "Muni, Hatol, Budhi, Kalag",
            "Kaluluwa, Dungan, Budhi, Bait"
        ],
        answer: 0,
        explanation: "Covar refers to Katauhang Panloob, Katauhang Palabas, Kaluluwa, and Budhi."
    },
    {
        number: 4,
        question: "In Filipino psychopathology or sikopatolohiya, which one is a relatively common occurrence in which a person suddenly loses control of respiration and digestion, falls into a coma, and ultimately dies?",
        choices: [
            "Karma",
            "Barang",
            "Gaba",
            "Bangungot"
        ],
        answer: 3,
        explanation: "Bangungot is identified as the condition involving sudden loss of control of respiration and digestion, followed by coma and possible death."
    },
    {
        number: 5,
        question: "In the study of Filipino interpersonal relationships, the category of Hindi Ibang Tao refers to interaction levels where the person is considered part of the in-group or “not an outsider.” Which of the following does NOT belong to the interaction levels classified under Hindi Ibang Tao?",
        choices: [
            "Pakikisangkot",
            "Pakikipagpalagayang-loob",
            "Pakikiisa",
            "Pakikibaka - Confrontative"
        ],
        answer: 3,
        explanation: "Pakikibaka is classified as a confrontative interaction level and does not belong under Hindi Ibang Tao."
    },
    {
        number: 6,
        question: "The category of Ibang Tao refers to interaction levels where the person is considered an outsider or “other,” and the relationship is characterized by limited familiarity, emotional distance, and formal social boundaries. Which of the following, however, is NOT considered an interaction level under the category of Ibang Tao?",
        choices: [
            "Pakikisalamuha",
            "Pakikibagay",
            "Pakikisangkot - Hindi Ibang Tao",
            "Pakikisama"
        ],
        answer: 2,
        explanation: "Pakikisangkot belongs to the Hindi Ibang Tao category rather than the Ibang Tao category."
    },
    {
        number: 7,
        question: "In understanding patterns in Filipino Psychology, if kapwa is considered the core value, which concept is associated with this pivotal interpersonal value?",
        choices: [
            "Kadandahang Loob",
            "Katarungan",
            "Pakikisangkot",
            "Pakiramdam"
        ],
        answer: 3,
        explanation: "Pakiramdam is associated with kapwa as a pivotal interpersonal value in Sikolohiyang Pilipino."
    },
    {
        number: 8,
        question: "This refers to the Filipino tendency of individuals to pull down others instead of boosting them or supporting them for higher position of leadership out of envy?",
        choices: [
            "Palasebo Mentality",
            "Hiya",
            "Amok",
            "Nepotism"
        ],
        answer: 0,
        explanation: "Palasebo Mentality refers to the tendency to pull down others rather than support their advancement."
    },
    {
        number: 9,
        question: "Among the values associated with Filipino personality patterns, which of the following is NOT INCLUDED in the accommodative surface values?",
        choices: [
            "Hiya",
            "Biro - Associated Behavioral",
            "Pakikisama",
            "Utang na Loob"
        ],
        answer: 1,
        explanation: "Biro is identified as the choice that is not included among the accommodative surface values."
    },
    {
        number: 10,
        question: "Among the values associated with Filipino personality patterns, which of the following is INCLUDED in the confrontative surface values?",
        choices: [
            "Pakikibaka",
            "Katarungan",
            "Pakikisama",
            "Pakikibagay"
        ],
        answer: 0,
        explanation: "Pakikibaka is identified as a confrontative surface value."
    },
    {
        number: 11,
        question: "It refers to sensitivity to personal affront and protects the individual against loss of social acceptance.",
        choices: [
            "Utang na loob",
            "Amor Propio",
            "Pakikisama",
            "Nepotism"
        ],
        answer: 1,
        explanation: "Amor Propio refers to sensitivity to personal affront and protection against loss of social acceptance."
    },
    {
        number: 12,
        question: "What term does Freud use to describe the unconscious expression of repressed desires through speech errors?",
        choices: [
            "Repression",
            "Freudian Slip",
            "Sublimation",
            "Rationalization"
        ],
        answer: 1,
        explanation: "A Freudian Slip refers to an unintended speech error interpreted as an expression of unconscious or repressed material."
    },
    {
        number: 13,
        question: "Guenn is a 13-year-old student who always tries to follow the rules at school and behave in a way that will please her teachers and friends. When asked why she didn’t cheat during an exam, she said, “Because I want my teacher to think I’m a good student and I don’t want to disappoint my classmates.” Based on Kohlberg’s theory, which stage of moral development is Guenn demonstrating?",
        choices: [
            "Stage 1",
            "Stage 2",
            "Stage 4",
            "Stage 3"
        ],
        answer: 3,
        explanation: "Stage 3, Good Interpersonal Relationships, emphasizes gaining approval and maintaining positive relationships with others."
    },
    {
        number: 14,
        question: "During circle time at preschool, Lloyd volunteers to lead a song even though he forgets some of the words. He enjoys making up silly lyrics and laughs along with his classmates. Later, he organizes a pretend game where he assigns roles to his friends and leads the play. His teacher notices Lloyd likes to start activities and seems confident in taking charge, even when things don’t go perfectly. Which stage of Erikson’s psychosocial development does Lloyd’s behavior best illustrate?",
        choices: [
            "Trust vs. Mistrust",
            "Initiative vs. Guilt",
            "Autonomy vs. Shame and Doubt",
            "Ego Integrity vs. Despair"
        ],
        answer: 1,
        explanation: "Initiative vs. Guilt involves children developing initiative, taking leadership, starting activities, and exercising purpose."
    },
    {
        number: 15,
        question: "What does Freud’s concept of the \"id\" primarily focus on?",
        choices: [
            "Reality Principle",
            "Pleasure Principle",
            "Moral Principle",
            "Social Norms"
        ],
        answer: 1,
        explanation: "The id operates according to the pleasure principle, seeking immediate gratification of basic drives."
    },
    {
        number: 16,
        question: "Karen Horney’s \"moving toward people\" coping strategy reflects:",
        choices: [
            "Aggressive tendencies",
            "Seeking affection and approval",
            "Withdrawal from social interactions",
            "Desire for independence"
        ],
        answer: 1,
        explanation: "Moving toward people involves seeking affection, approval, acceptance, and protection from others."
    },
    {
        number: 17,
        question: "Nico find his friend’s pen very fascinating and thinks of stealing it but then decided not to steal because his parents will know they not think positive about him. According to Kohlberg’s at which stage of morality is Nico?",
        choices: [
            "Punishment and Obedience",
            "Good Interpersonal Relationship",
            "Individualism and Exchange",
            "Social Order"
        ],
        answer: 1,
        explanation: "Nico is motivated by maintaining a positive relationship and approval from significant others, corresponding to Stage 3, Good Interpersonal Relationship."
    },
    {
        number: 18,
        question: "During a counseling session, Joselle shares that she wants to pursue her passion for painting, not because of money or praise, but because it gives her a deep sense of purpose and personal growth. Her counselor explains that this desire to fulfill her potential is a natural part of human motivation. Which theory of personality best explains Joselle’s drive for self-actualization and personal fulfillment, rather than being driven by unconscious instincts?",
        choices: [
            "Humanistic",
            "CBT",
            "Psychoanalytic",
            "Behavioral"
        ],
        answer: 0,
        explanation: "Humanistic theory emphasizes personal growth, self-actualization, authenticity, and fulfillment of potential."
    },
    {
        number: 19,
        question: "In Freud’s psychosexual stages, fixation during the oral stage may lead to?",
        choices: [
            "Excessive neatness or orderliness",
            "Dependency or aggressive oral behaviors",
            "Anxiety around intimacy",
            "Delayed cognitive development"
        ],
        answer: 1,
        explanation: "According to Freud’s theory, oral fixation may be expressed through dependency or aggressive oral behaviors."
    },
    {
        number: 20,
        question: "All of the following theorists proposed specific concepts or explanations related to personality development, particularly in understanding how personality is formed and shaped across the lifespan, EXCEPT:",
        choices: [
            "B.F. Skinner - Behavioral",
            "Kohlberg",
            "Jean Piaget",
            "Erikson"
        ],
        answer: 0,
        explanation: "Based on the provided material, B.F. Skinner is the exception."
    },
    {
        number: 21,
        question: "Mr. Bautista, a 45-year-old individual, actively mentors young professionals and participates in volunteer work. He derives a sense of fulfillment from contributing to the growth and well-being of others. Which psychosocial stage is he exhibiting?",
        choices: [
            "Integrity vs. Despair",
            "Initiative vs. Guilt",
            "Generativity vs. Stagnation",
            "Intimacy vs. Isolation"
        ],
        answer: 2,
        explanation: "Generativity vs. Stagnation involves contributing to the growth and well-being of others and the next generation."
    },
    {
        number: 22,
        question: "Every time a student hears the bell ring at school (which signals lunch), they begin to feel hungry. After a few weeks, they start feeling hungry just from hearing the bell, even if it's not lunchtime yet. What is the conditioned stimulus in this situation?",
        choices: [
            "Bell",
            "Food",
            "Hungry",
            "Lunchtime"
        ],
        answer: 0,
        explanation: "The bell becomes the conditioned stimulus because it is learned to trigger the response of hunger."
    },
    {
        number: 23,
        question: "They are often viewed as pampered, dependent, immature, and irresponsible. They also tend to be more sociable and usually receive a great deal of attention. This description refers to:",
        choices: [
            "Favorite Child",
            "Last or youngest",
            "Middleborn",
            "First Born"
        ],
        answer: 1,
        explanation: "The last or youngest child is described in the provided material as often pampered, dependent, immature, irresponsible, sociable, and receiving considerable attention."
    },
    {
        number: 24,
        question: "Carl Jung’s concept of \"archetypes\" originates from which part of the psyche?",
        choices: [
            "Ego",
            "Personal unconscious",
            "Collective unconscious",
            "Conscious mind"
        ],
        answer: 2,
        explanation: "Jung's archetypes are universal patterns or images originating from the collective unconscious."
    },
    {
        number: 25,
        question: "Freud's psychoanalytic theory of personality focuses on all the following. Which is/are LEAST INAPPROPRIATE? I. Methods used to cope with sexual and aggressive urges II. The potential for personal growth - Humanistic III. The influence of childhood experiences IV. Unconscious motives and conflicts",
        choices: [
            "I, II, III, and IV",
            "I, and II",
            "I, III, and IV",
            "I, II, and IV"
        ],
        answer: 2,
        explanation: "Freud's psychoanalytic theory includes methods for coping with sexual and aggressive urges, childhood experiences, and unconscious motives and conflicts. The potential for personal growth is associated with Humanistic theory."
    },
    {
        number: 26,
        question: "Which theorist emphasized the value of present experiences and the whole person, promoted creativity and free choice, and believed that individuals are capable of resolving their own psychological issues?",
        choices: [
            "B.F. Skinner",
            "Carl Roger",
            "Sigmund Freud",
            "Karen Horney"
        ],
        answer: 1,
        explanation: "Carl Rogers emphasized present experience, the whole person, free choice, creativity, and the individual's capacity for growth and self-resolution."
    },
    {
        number: 27,
        question: "What term describes the feelings, desires, and striving of a boy’s desire for his mother and his fear or hatred toward his father, where the child fears losing their male identity?",
        choices: [
            "Identity Crisis",
            "Moral Anxiety",
            "Oedipus Complex",
            "Electra Complex"
        ],
        answer: 2,
        explanation: "The Oedipus Complex refers to the psychoanalytic concept involving a boy's attachment to his mother and rivalry or hostility toward his father."
    },
    {
        number: 28,
        question: "During a personality assessment session, the counselor asks Luis how he typically makes important life decisions. Luis responds, \"I usually follow what feels right to me. I ask myself how it will affect others and whether it aligns with my values. If it doesn’t sit well emotionally, I won’t go through with it even if it seems logical.\" Based on Carl Jung's psychological functions, which function is Luis primarily using to guide his decisions and experience emotions like joy, pain, and love?",
        choices: [
            "Intuiting",
            "Sensing",
            "Thinking",
            "Feeling"
        ],
        answer: 3,
        explanation: "Jung's Feeling function evaluates experiences through values and emotional judgments, including joy, pain, and love."
    },
    {
        number: 29,
        question: "During his free time, Leonard watches YouTube videos of chess masters playing strategic matches. He later applies similar moves in his own games. What type of observational learning model is this?",
        choices: [
            "Live Model",
            "Symbolic Model",
            "Verbal Instructional Model",
            "Operant Conditioning"
        ],
        answer: 1,
        explanation: "A symbolic model involves learning by observing representations or media, such as videos of chess masters."
    },
    {
        number: 30,
        question: "Which defense mechanism involves transferring feelings from a threatening object to a safer one?",
        choices: [
            "Displacement",
            "Rationalization",
            "Repression",
            "Reaction Formation"
        ],
        answer: 0,
        explanation: "Displacement involves redirecting emotions or impulses from a threatening target toward a safer or less threatening target."
    },
    {
        number: 31,
        question: "It refers to the quality of being creatively, beautifully, or artistically pleasing.",
        choices: [
            "Esteem Needs",
            "Aesthetic Needs",
            "Cognitive Needs",
            "Safety Needs"
        ],
        answer: 1,
        explanation: "Aesthetic needs involve appreciation of beauty, creativity, and artistic qualities."
    },
    {
        number: 32,
        question: "Which is referred to when survivors of traumatic events such as wars, tortures, sexual abuse are at risk of a condition which is characterized by a sudden feeling or acting?",
        choices: [
            "Panic Attack",
            "Post-Traumatic Stress Disorder",
            "Battered Wife Syndrome",
            "Depressive Disorder"
        ],
        answer: 1,
        explanation: "Post-Traumatic Stress Disorder is associated with psychological effects following traumatic events such as war, torture, and sexual abuse."
    },
    {
        number: 33,
        question: "The inability or refusal to conform to customary social norms and societal expectations is known as?",
        choices: [
            "Aggression",
            "Disorganization",
            "Hostility",
            "Deviation"
        ],
        answer: 3,
        explanation: "Deviation refers to inability or refusal to conform to customary social norms and societal expectations."
    },
    {
        number: 34,
        question: "Which concept explains deviance as a natural and necessary part of society?",
        choices: [
            "Conflict Theory",
            "Structural Functionalism",
            "Rational Choice",
            "Symbolic Interactionism"
        ],
        answer: 1,
        explanation: "Structural Functionalism views deviance as a social phenomenon that can serve functions within society."
    },
    {
        number: 35,
        question: "Shaira was caught shoplifting several branded shirts from a department store. When confronted, she shrugged and said, “These big companies rip people off every day. They overprice everything so who’s really the criminal here?” What technique of neutralization is Shaira using to justify her deviant behavior?",
        choices: [
            "Denial of Injury",
            "Denial of the Victim",
            "Condemnation of the Condemners",
            "Appeal to Higher Loyalties"
        ],
        answer: 2,
        explanation: "Condemnation of the Condemners involves shifting attention from one's own behavior by criticizing or condemning those who enforce the rules."
    },
    {
        number: 36,
        question: "Who says that delinquent boys who have committed crimes band together to form a subculture where they may define their position in ways that make sense to them?",
        choices: [
            "Emile Durkheim",
            "Karl Marx",
            "Robert Merton",
            "Albert Cohen"
        ],
        answer: 3,
        explanation: "Albert Cohen proposed that delinquent boys may form subcultures that provide alternative values and status systems."
    },
    {
        number: 37,
        question: "Which personality disorder involves a chronic and pervasive pattern of mistrust and suspicion toward others, where individuals frequently believe that others are exploiting, deceiving, or harming them, leading to reluctance in confiding in others, persistent grudges, and hypervigilance to perceived threats, even in the absence of objective evidence?",
        choices: [
            "Paranoid Personality Disorder",
            "Schizoid Personality Disorder",
            "Schizotypal Personality Disorder",
            "Antisocial Personality Disorder"
        ],
        answer: 0,
        explanation: "Paranoid Personality Disorder is characterized by pervasive distrust, suspicion, perceived exploitation or harm, and difficulty trusting others."
    },
    {
        number: 38,
        question: "Mr. Cruz, a 32-year-old man, avoids social interactions because he fears being criticized, embarrassed, or rejected. He desires close relationships but is extremely sensitive to negative evaluation and often perceives himself as socially inadequate. As a result, he tends to withdraw from social and occupational situations despite wanting to connect with others. Which personality disorder does Mr. Reyes most likely exhibit?",
        choices: [
            "Avoidant Personality Disorder",
            "Schizoid Personality Disorder",
            "Schizotypal Personality Disorder",
            "Dependent Personality Disorder"
        ],
        answer: 0,
        explanation: "Avoidant Personality Disorder involves social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation despite a desire for relationships."
    },
    {
        number: 39,
        question: "Ms. Santos, a 28-year-old woman, frequently seeks attention in social and professional settings. She dresses in a provocative manner, speaks dramatically, and often exaggerates her emotions to be noticed by others. She becomes easily influenced by those around her and feels uncomfortable when she is not the center of attention. Which personality disorder does Ms. Santos most likely exhibit?",
        choices: [
            "Narcissistic Personality Disorder",
            "Dependent Personality Disorder",
            "Schizotypal Personality Disorder",
            "Histrionic Personality Disorder"
        ],
        answer: 3,
        explanation: "Histrionic Personality Disorder is characterized by excessive emotionality, attention-seeking, dramatic expression, and discomfort when not the center of attention."
    },
    {
        number: 40,
        question: "What theory views that people become deviant or criminals when labeled as such and when they accept the label as a personal identity?",
        choices: [
            "Labeling theory",
            "Deterrence theory",
            "Neutralization theory",
            "Conflict theory"
        ],
        answer: 0,
        explanation: "Labeling theory explains deviance partly through social reactions and the internalization of deviant labels."
    },
    {
        number: 41,
        question: "William Sheldon identified the primary component of body type and matches this with the three components of temperament. If Endomorphy is with Viscerotonia, what’s with Ectomorphs?",
        choices: [
            "Somatotonia",
            "Dysplasia",
            "Cerebrotonia",
            "Asthenic"
        ],
        answer: 2,
        explanation: "In Sheldon's somatotype theory, ectomorphy is associated with cerebrotonia."
    },
    {
        number: 42,
        question: "Christian wants to attend his preferred college, but his family cannot afford the tuition. To overcome this, he resorts to illegal means to earn money or cheats on exams to secure scholarships or admission. Which mode of adaptation is Christian demonstrating?",
        choices: [
            "Retreatism",
            "Rebellion",
            "Conformity",
            "Innovation"
        ],
        answer: 3,
        explanation: "Innovation involves accepting culturally valued goals while using illegitimate or unconventional means to achieve them."
    },
    {
        number: 43,
        question: "Twelve-year-old Claire is allowed to drink alcohol at home with his parents. Learning from these experiences, Claire then drinks when at his friend’s houses. Which theory best explains her drinking behaviors?",
        choices: [
            "Social Regulation",
            "Social Integration",
            "Differential Association",
            "Social Control"
        ],
        answer: 2,
        explanation: "Differential Association explains behavior as learned through interaction and exposure to others."
    },
    {
        number: 44,
        question: "According to deterrence theory, people avoid committing crimes because of the following, EXCEPT ONE:",
        choices: [
            "They are afraid of getting caught",
            "They know there are penalties",
            "They fear swift, certain, and severe punishments",
            "They have a deep moral sense"
        ],
        answer: 3,
        explanation: "Deterrence theory focuses on the perceived certainty, swiftness, and severity of punishment rather than deep moral sense."
    },
    {
        number: 45,
        question: "According to Travis Hirschi, the following are the factors that prevent people from committing crimes, EXCEPT:",
        choices: [
            "Attachment",
            "Commitment",
            "Relationship",
            "Beliefs"
        ],
        answer: 2,
        explanation: "Hirschi's social bond theory identifies attachment, commitment, involvement, and belief as the major social bonds; relationship is not one of the four named factors."
    },
    {
        number: 46,
        question: "Engaging in acts like securities fraud, embezzlement, misappropriation of corporate funds, and money laundering involves violating laws related to financial integrity and corporate responsibility. Which category of criminal behavior do these actions represent?",
        choices: [
            "Green-collar Crime",
            "White-collar Crime",
            "Black-collar Crime",
            "Blue-collar Crime"
        ],
        answer: 1,
        explanation: "White-collar crime includes financially motivated offenses committed in occupational or corporate contexts."
    },
    {
        number: 47,
        question: "Paulo has a highly muscular build and is often involved in criminal behavior. Based on William Sheldon’s somatotype theory, which somatotype is he most likely classified as?",
        choices: [
            "Endomorph",
            "Ectomorph",
            "Sonomorph",
            "Mesomorph"
        ],
        answer: 3,
        explanation: "Mesomorphs are characterized by a muscular, athletic body type in Sheldon's somatotype theory."
    },
    {
        number: 48,
        question: "Which of the following statements accurately characterizes anorexia nervosa, a psychiatric disorder marked by severe restriction of food intake, intense fear of gaining weight, and a distorted perception of body image?",
        choices: [
            "Recurrent episodes of binge eating followed by inappropriate compensatory behaviors, such as vomiting or excessive exercise.",
            "Persistent restriction of food intake, intense fear of gaining weight, and a distorted perception of body image.",
            "Excessive preoccupation with body shape and weight, leading to frequent checking in the mirror but without significant weight loss.",
            "Consuming non-food substances, such as dirt or chalk, over a prolonged period."
        ],
        answer: 1,
        explanation: "Anorexia nervosa is characterized by restriction of food intake, intense fear of gaining weight, and disturbed body-image perception."
    },
    {
        number: 49,
        question: "An individual becomes sexually aroused or fixated on non-living objects or specific body parts that are not typically considered sexual. Which paraphilic disorder does this behavior exemplify?",
        choices: [
            "Voyeurism",
            "Fetishism",
            "Exhibitionism",
            "Frotteurism"
        ],
        answer: 1,
        explanation: "Fetishism involves sexual arousal or fixation involving non-living objects or specific non-genital body parts."
    },
    {
        number: 50,
        question: "What term refers to random acts of violence where the victims are often innocent individuals?",
        choices: [
            "Conflict",
            "Revolution",
            "Social Movement",
            "Terrorism"
        ],
        answer: 3,
        explanation: "Terrorism involves acts of violence intended to create fear, often affecting individuals who are not direct participants in a conflict."
    },
    {
        number: 51,
        question: "Walter Rostow proposed a theory outlining the stages that countries typically go through in their path toward economic development. His model describes a linear process that begins with a traditional society and ends with a highly developed economy characterized by mass consumption. Based on this theory, which of the following correctly represents the chronological sequence of Rostow’s five stages of economic development? I. Age of High Mass Consumption II. Take-Off III. Drive to Maturity IV. Traditional Society V. Preconditions for Take-Off",
        choices: [
            "V, II, III, I, and IV",
            "IV, V, II, III, and I",
            "I, IV, V, II, and III",
            "IV, V, II, I, and III"
        ],
        answer: 1,
        explanation: "Rostow's sequence is Traditional Society, Preconditions for Take-Off, Take-Off, Drive to Maturity, and Age of High Mass Consumption."
    },
    {
        number: 52,
        question: "What concept refers to the understanding of how things work in the world that altered over-time due to a new approach or underlying assumptions of a new idea?",
        choices: [
            "Geopolitics",
            "Perspective",
            "Paradigm Shift",
            "Invention"
        ],
        answer: 2,
        explanation: "A paradigm shift refers to a fundamental change in the underlying framework or assumptions used to understand a subject."
    },
    {
        number: 53,
        question: "A municipal health office schedules a community clean-up day and sends a directive through the barangay captain that every household must send one representative. Residents are assigned areas and warned that non-attendance will be recorded. On the day of the activity, people show up, do the task, and leave without being consulted or involved in planning or follow-up. What type of participation does this situation reflect?",
        choices: [
            "Functional Participation",
            "Participation in Information Giving",
            "Passive Participation",
            "Interactive Participation"
        ],
        answer: 2,
        explanation: "Passive Participation involves people being directed or informed to participate without meaningful involvement in planning, decision-making, or follow-up."
    },
    {
        number: 54,
        question: "What concept refers to the combination of existing verified knowledge into a new use. It can be in material (modern technology) and social (trade union)?",
        choices: [
            "Discovery",
            "Invention",
            "Ideology",
            "Social Consciousness"
        ],
        answer: 1,
        explanation: "Invention refers to combining existing verified knowledge into a new material or social use."
    },
    {
        number: 55,
        question: "The Department of Education ensures that all public schools in rural areas have trained teachers and enough learning materials. This is in fulfillment of its obligation to uphold every child’s right to quality education. Given the situation above, who is considered the duty-bearer?",
        choices: [
            "The Pupils",
            "The Parents",
            "Politicians",
            "Department of Education"
        ],
        answer: 3,
        explanation: "The Department of Education is the duty-bearer because it has the institutional obligation to fulfill and protect the right to quality education."
    },
    {
        number: 56,
        question: "In Karl Marx’s stages of historical development, which stage describes a time when human societies practiced hunting and gathering, had no system of production, no private property, no class divisions, and no social inequality?",
        choices: [
            "Feudalism",
            "Slavery",
            "Primitive",
            "Capitalist"
        ],
        answer: 2,
        explanation: "The Primitive stage is described as the period of hunting and gathering without private property, class divisions, or social inequality."
    },
    {
        number: 57,
        question: "Which theory emphasizes the importance of the availability of favorable resources—such as money, leadership, media access, and organizational skills—in the emergence and success of a social movement?",
        choices: [
            "Resources Mobilization Theory",
            "Political Process Theory",
            "Deprivation Theory",
            "Big Push Theory"
        ],
        answer: 0,
        explanation: "Resource Mobilization Theory emphasizes resources such as money, leadership, media access, and organizational capacity in social movement success."
    },
    {
        number: 58,
        question: "According to Paul Rosenstein-Rodan, developing countries can achieve accelerated economic growth when multiple sectors advance together, creating mutually reinforcing progress. What term did he use to describe this phenomenon?",
        choices: [
            "Development Drive",
            "Big Push",
            "Compelled Growth",
            "Gradual Growth"
        ],
        answer: 1,
        explanation: "The Big Push refers to coordinated investment across multiple sectors to generate mutually reinforcing economic development."
    },
    {
        number: 59,
        question: "Social movements typically go through a series of stages as they form, grow, and either succeed or decline. Based on sociological theories, what is the correct sequence of the stages of a social movement?",
        choices: [
            "Coalescence, Emergency, Bureaucratization, and Phase-out",
            "Coalescence, Bureacareatization, Adaption, and Phase-out",
            "Emergence, Coalescence, Bureaucratization, and Decline",
            "Conception, Adaptation, Institutionalization, and Coalescence"
        ],
        answer: 2,
        explanation: "The sequence is Emergence, Coalescence, Bureaucratization, and Decline."
    },
    {
        number: 60,
        question: "In a city university, a group of students forms an organization called “Equal Voice.” They campaign for equal pay for female faculty members, push for policies against campus sexual harassment, and advocate for more women in leadership roles. They also hold educational forums to challenge harmful gender stereotypes in textbooks and media. This situation reflects what type of social movement?",
        choices: [
            "Labor Movement",
            "Civil Rights Movement",
            "Feminism",
            "Radical Movement"
        ],
        answer: 2,
        explanation: "Feminism is a social movement focused on gender equality, women's rights, and challenging gender-based discrimination."
    },
    {
        number: 61,
        question: "What do you call countries that are economically dependent on core countries for capital, often characterized by underdeveloped industries, low levels of technology, and poor infrastructure?",
        choices: [
            "Core Countries",
            "Peripheral Countries",
            "Semi-Peripheral Countries",
            "Dependent Nations"
        ],
        answer: 1,
        explanation: "Peripheral countries are economically dependent on core countries and are often characterized by less-developed industries and infrastructure."
    },
    {
        number: 62,
        question: "In a remote barangay in the mountains of Benguet, families rely on farming and help one another during harvest season. Neighbors attend each other's fiestas, weddings, and even funerals. What type of community does this situation depict?",
        choices: [
            "Gemeinschaft",
            "Gesellschaft",
            "Peripheral",
            "Core"
        ],
        answer: 0,
        explanation: "Gemeinschaft describes close-knit communities characterized by strong personal relationships, shared traditions, and mutual support."
    },
    {
        number: 63,
        question: "What term refers to rapid, fundamental, and violent domestic change in the dominant values and myths of society, in its political institutions, social structure, leadership, and government activity and policies?",
        choices: [
            "Conflict",
            "Revolution",
            "Social Movement",
            "Terrorism"
        ],
        answer: 1,
        explanation: "Revolution refers to rapid, fundamental, and often violent transformation of political institutions, social structures, values, leadership, and government policies."
    },
    {
        number: 64,
        question: "In a coastal town in Palawan, a new eco-tourism site opens. Many residents shift from fishing to working in tourism. Over time, traditional practices fade as the community adapts to a more commercial lifestyle. This situation is an example of what type of social phenomenon?",
        choices: [
            "Social Reality",
            "Social Situation",
            "Social Change",
            "Social Stratification"
        ],
        answer: 2,
        explanation: "Social Change refers to changes in social practices, relationships, institutions, and patterns of living over time."
    },
    {
        number: 65,
        question: "Daye, a social worker assigned to a provincial government office, is helping an indigenous family displaced by a commercial development project. Despite having no formal land title, the family has lived on the land for generations. They are now being denied access to basic services like housing and education due to their informal status. Daye wants to respond ethically and professionally. Which of the following frameworks should Daye use to guide her advocacy for the family?",
        choices: [
            "Bottom-up Approach",
            "Capability Approach",
            "Rights-based Approach",
            "Developmental Approach"
        ],
        answer: 2,
        explanation: "A rights-based approach centers advocacy on the rights, dignity, entitlements, and protection of people experiencing exclusion or discrimination."
    },
    {
        number: 66,
        question: "In calculating the Human Development Index (HDI), one of the key dimensions is the ability to live a long and healthy life. Which indicator is used to measure this dimension?",
        choices: [
            "Literacy rate",
            "Birth rate",
            "Life expectancy at birth",
            "Income per capita"
        ],
        answer: 2,
        explanation: "Life expectancy at birth is the indicator used to represent the health and longevity dimension of the HDI."
    },
    {
        number: 67,
        question: "A city government contracts a private company to manage its public transportation system. While service quality improves, fares increase and some low-income residents struggle to afford rides. This scenario illustrates what concept?",
        choices: [
            "Privatization",
            "Deregulation",
            "Liberalization",
            "Innovation"
        ],
        answer: 0,
        explanation: "Privatization involves transferring the management or provision of a public service to a private company."
    },
    {
        number: 68,
        question: "What term refers to conscious process formed through social relationships, whereby people engaged in real activities that are transformed into cognitive products?",
        choices: [
            "Paradigm Shift",
            "Social Consciousness",
            "Passive Participation",
            "Ideology"
        ],
        answer: 3,
        explanation: "Based on the provided material, Ideology is the identified answer for this concept."
    },
    {
        number: 69,
        question: "Neoliberalism is an economic and political approach that emphasizes minimal government intervention in markets, promotion of free trade, privatization of public services, and individual entrepreneurship. Which statement accurately reflects the principles of neoliberalism?",
        choices: [
            "Government should heavily regulate markets to ensure equality and control prices.",
            "Public services should remain fully state-run to guarantee universal access.",
            "Economic growth is best achieved by reducing government intervention, promoting free markets, and encouraging privatization.",
            "All businesses should be nationalized to prevent foreign influence"
        ],
        answer: 2,
        explanation: "Neoliberalism emphasizes reduced government intervention, free markets, free trade, privatization, and individual entrepreneurship."
    },
    {
        number: 70,
        question: "Chrishen, a development worker, is assigned as the GAD focal person in a rural municipality. The mayor wants to promote gender equality and directs Chrishen to recommend programs and strategies that reflect genuine implementation of Gender and Development (GAD). Which of the following should Chrishen prioritize to ensure that GAD principles are integrated? I. Conduct gender analysis to assess the different needs, vulnerabilities, and strengths of women, men, and LGBTQ+ clients in the community II. Institutionalize gender-responsive budgeting in all social protection and welfare programs under the Municipal Social Welfare and Development Office (MSWDO) III. Conduct one-time gender sensitivity training for all MSWDO staff and barangay workers to meet compliance IV. Recommend inclusive program benefits for the community regardless of gender, undermining actual gender-based needs or context",
        choices: [
            "I and II",
            "I, II, and IV",
            "II and III",
            "III and IV"
        ],
        answer: 0,
        explanation: "Gender analysis and institutionalizing gender-responsive budgeting are ongoing mechanisms that integrate GAD principles into programs and resource allocation."
    },
    {
        number: 71,
        question: "A newlywed couple in Manila decides to move out of both their parents’ homes and rent a condominium in Quezon City to start their own household. What type of post-marital residence pattern is demonstrated in the scenario?",
        choices: [
            "Neolocal",
            "Patrilineal",
            "Bilineal",
            "Matrilineal"
        ],
        answer: 0,
        explanation: "Neolocal residence occurs when a newly married couple establishes a new household separate from both sets of parents."
    },
    {
        number: 72,
        question: "What term refers to the collective group of individuals who reside and coexist within a shared space, such as a village, town, neighborhood, city, province, or even an entire country, forming relationships, institutions, and systems that allow them to live and function together?",
        choices: [
            "Online Community",
            "Functional Community",
            "Geographical Community",
            "Cultural Community"
        ],
        answer: 2,
        explanation: "A geographical community consists of people who live and interact within a shared geographic area."
    },
    {
        number: 73,
        question: "A manager announces new work schedules and policies without consulting the staff. Employees are expected to follow the changes immediately, and any feedback is dismissed. What type of leadership style is demonstrated in this scenario?",
        choices: [
            "Laissez-Faire",
            "Autocratic",
            "Coercive",
            "Democratic"
        ],
        answer: 1,
        explanation: "Autocratic leadership involves centralized decision-making with little or no participation from subordinates."
    },
    {
        number: 74,
        question: "Changes in conditions of the group in a developmental sequence and interactional process facilitated by the social worker.",
        choices: [
            "Group Process",
            "Progression",
            "Process",
            "Group Dynamics"
        ],
        answer: 0,
        explanation: "Group Process refers to changes in group conditions through a developmental and interactional process facilitated by the social worker."
    },
    {
        number: 75,
        question: "A family relocates to a different country where the norms and traditions differ significantly from their home culture. Over time, they adapt by learning and practicing these new norms. Which process is the family undergoing?",
        choices: [
            "Cultural Integration",
            "Primary Socialization",
            "Secondary socialization",
            "Biological Socialization"
        ],
        answer: 0,
        explanation: "Cultural Integration refers to adapting to and incorporating aspects of a new culture while living within it."
    },
    {
        number: 76,
        question: "Which social process is based on the principle of give-and-take and involves making some concessions to reach mutual agreement?",
        choices: [
            "Yielding to Coercion",
            "Arbitration",
            "Tolerance",
            "Compromise"
        ],
        answer: 3,
        explanation: "Compromise is a give-and-take process in which parties make concessions to reach a mutually acceptable agreement."
    },
    {
        number: 77,
        question: "These people are the spreaders of doom and gloom, ever ready with reasons why the schemes or ideas can never work. They can see a flaw in every plan, a dark cloud in every silver lining.",
        choices: [
            "Schemers",
            "Gossips",
            "Pessimist",
            "Exhibitionist"
        ],
        answer: 1,
        explanation: "Based on the provided material, Gossips is the identified answer for this description."
    },
    {
        number: 78,
        question: "Bruce Tuckman proposed a model describing the stages through which groups typically progress as they develop and function effectively. What is the correct order of these group development stages?",
        choices: [
            "Forming, Storming, Norming, Performing, and Adjourning",
            "Convening, Storming, Performing, and Adjourning",
            "Convening, Storming, Norming, and Termination",
            "Forming, Norming, Storming, Performing, and Adjourning"
        ],
        answer: 0,
        explanation: "Tuckman's sequence is Forming, Storming, Norming, Performing, and Adjourning."
    },
    {
        number: 79,
        question: "Which function of the community involves providing mechanisms for transmitting existing knowledge, social values, and dominant patterns of behavior to its members?",
        choices: [
            "A System of Socialization",
            "A System of Production, Distribution & Consumption",
            "System of Social Participation",
            "A System of Social Control"
        ],
        answer: 0,
        explanation: "A System of Socialization transmits existing knowledge, social values, and dominant patterns of behavior to community members."
    },
    {
        number: 80,
        question: "After their children move out, Roberto and Elena find themselves alone at home for the first time in years. They begin spending more time together, rekindling their bond as a couple. Elena joins a grandparenting seminar to learn new parenting styles to better connect with their grandchildren. Roberto starts planning for retirement and makes small adjustments to the house in case he might live alone in the future. What stage in the family life cycle are the couple currently in?",
        choices: [
            "Family Founding",
            "Child Launching",
            "Empty Nest",
            "Old Age"
        ],
        answer: 2,
        explanation: "The Empty Nest stage begins after children leave the household and parents adjust to life as a couple again while preparing for later life."
    },
    {
        number: 81,
        question: "What concept refers to the capacity to take some degree of control over one’s life and accept responsibility for decisions and actions, while also respecting the rights and needs of others?",
        choices: [
            "Niche",
            "Self-esteem",
            "Self-direction",
            "Coping Measures"
        ],
        answer: 2,
        explanation: "Self-direction refers to exercising control over one's life, accepting responsibility for choices and actions, and respecting others."
    },
    {
        number: 82,
        question: "In the Dela Cruz household, the father works long hours as a construction supervisor and is often away during the day. While he is at work, the mother takes charge of household decisions, disciplines the children, and manages daily routines. The children follow her guidance and respect her authority in his absence. According to the typology of family based on authority, what is this situation called?",
        choices: [
            "Equalitarian",
            "Matrifocal",
            "Matricentric",
            "Matriarchal"
        ],
        answer: 2,
        explanation: "The provided material identifies this arrangement as Matricentric, where the mother is central to household authority and functioning."
    },
    {
        number: 83,
        question: "From an ecological perspective, this layer is nearest to the child. It comprises the structure with which the child directly interacts. This is called an immediate environment.",
        choices: [
            "Exosystem",
            "Mesosystem",
            "Chronosystem",
            "Microsystem"
        ],
        answer: 3,
        explanation: "The Microsystem is the ecological layer closest to the child and includes settings with which the child directly interacts."
    },
    {
        number: 84,
        question: "One individual is widely recognized for laying the foundation of contemporary management practices through his contributions to management theory, strategic planning, and organizational effectiveness. Often referred to as the 'Father of Modern Management,' who is this influential figure?",
        choices: [
            "Max Weber",
            "Henri Fayol",
            "Elton Mayo",
            "Fredrick W. Taylor"
        ],
        answer: 1,
        explanation: "Henri Fayol is identified as the Father of Modern Management for his contributions to management theory and organizational effectiveness."
    },
    {
        number: 85,
        question: "Which type of inadequacy is demonstrated in the scenario where Mark, a college undergraduate with good communication skills, is repeatedly rejected by BPO companies due to strict qualifications and the lack of accessible training centers in his area?",
        choices: [
            "Situational Inadequacies",
            "Personal Inadequacies",
            "Both Situational and Personal",
            "Social Dysfunction"
        ],
        answer: 0,
        explanation: "Situational inadequacies arise from environmental or structural circumstances that limit opportunities despite the person's abilities."
    },
    {
        number: 86,
        question: "Despite his busy job, Carlo makes it a point to be home every evening to help his kids with homework, play with them, and read bedtime stories. On weekends, he takes them to the park or helps with school projects. He genuinely enjoys spending time with his children and actively participates in their daily lives. According to typologies of fatherhood, what type of father is Carlo?",
        choices: [
            "Authoritative Father",
            "Dilettante Father",
            "Procreator Father",
            "Generative Father"
        ],
        answer: 3,
        explanation: "A Generative Father actively participates in the lives of his children and contributes to their development and well-being."
    },
    {
        number: 87,
        question: "It refers to the unjust treatment of different categories of people or things especially on the grounds of race, age, or sex.",
        choices: [
            "Prejudice",
            "Stereotype",
            "Discrimination",
            "Social Inclusion"
        ],
        answer: 2,
        explanation: "Discrimination refers to unjust or unequal treatment based on characteristics such as race, age, or sex."
    },
    {
        number: 88,
        question: "Rey, a middle-class worker, struggles to pay bills and support his family after company retrenchment. Just months later, his wife is diagnosed with a severe illness, adding to their financial strain. What type of poverty shows in Rey's situation, where he loses his job and incurs medical bills?",
        choices: [
            "Relative Poverty",
            "Generational Poverty",
            "Situational Poverty",
            "Chronic Poverty"
        ],
        answer: 2,
        explanation: "Situational poverty results from a specific event or set of circumstances, such as job loss or unexpected medical expenses."
    },
    {
        number: 89,
        question: "An individual who was assigned male at birth but identifies and perceives oneself as a woman demonstrates which component of Sexual Orientation and Gender Identity and Expression (SOGIE)?",
        choices: [
            "Sexual Orientation",
            "Gender Identity",
            "Gender Expression",
            "Sexual Attraction"
        ],
        answer: 1,
        explanation: "Gender identity refers to a person's internal sense and understanding of their gender."
    },
    {
        number: 90,
        question: "Christian is an ethnocentric. He considers other people, specifically indigenous people, as backwards people who have no manners at all. Why do you think Christian come up with this bias?",
        choices: [
            "He regards another culture as superior",
            "He regards his own culture as normal and uses it measure foreign cultures",
            "He regards his own culture as superior",
            "He regards another culture as superior and uses it to measure his own culture"
        ],
        answer: 2,
        explanation: "Ethnocentrism involves judging other cultures according to the standards and perceived superiority of one's own culture."
    },
    {
        number: 91,
        question: "According to available statistics and reports on substance abuse in the Philippines, which illegal drug has the highest rate of use among Filipino drug users?",
        choices: [
            "Cocaine",
            "Ecstasy",
            "Methamphetamine Hydrochloride",
            "Cannabis"
        ],
        answer: 2,
        explanation: "Based on the provided material, Methamphetamine Hydrochloride is identified as the illegal drug with the highest rate of use among Filipino drug users."
    },
    {
        number: 92,
        question: "The Philippines is often categorized as an underdeveloped or developing country due to persistent structural and socioeconomic challenges. Which of the following best explains this classification?",
        choices: [
            "The white-collar mentality.",
            "Few Filipinos have the training or experience as business person which would enable them to take advantage of the opportunities around them.",
            "Filipino as a group do not have enough savings to provide investment funds.",
            "Poor utilization of natural resources of the country to the greatest possible extent."
        ],
        answer: 3,
        explanation: "Based on the provided material, poor utilization of the country's natural resources is identified as the best explanation."
    },
    {
        number: 93,
        question: "A manager believes that employees are lazy and need constant supervision to meet their targets. Which of the following actions is consistent with McGregor’s Theory Y approach to motivation?",
        choices: [
            "Closely monitoring employees’ work and imposing strict rules and penalties.",
            "Limiting employee participation in decision-making to maintain control.",
            "Encouraging employee participation, autonomy, and self-direction in accomplishing tasks.",
            "Assigning individual task to each employee and monitoring their progress daily."
        ],
        answer: 2,
        explanation: "Theory Y assumes employees can be self-directed and responsible, so participation, autonomy, and self-direction are encouraged."
    },
    {
        number: 94,
        question: "Which among the following is the definition of marriage under the Family Code of the Philippines?",
        choices: [
            "Marriage, also called matrimony or wedlock, is a culturally and often legally recognized union between people called spouses.",
            "Marriage is a legally or formally recognized union of two people as partners in a personal relationship.",
            "Marriage is a special contract of permanent union between a man and a woman entered into in accordance with the law for the establishment of conjugal and family life.",
            "Marriage, a legally and socially sanctioned union, usually between a man and a woman, that is regulated by laws, rules, customs, beliefs, and attitudes that prescribe the rights and duties of the partners and accords status to their offspring."
        ],
        answer: 2,
        explanation: "The provided material identifies the Family Code definition as a special contract of permanent union between a man and a woman entered into in accordance with law for the establishment of conjugal and family life."
    },
    {
        number: 95,
        question: "Which among the following is the most ratified and embraced human rights UN instrument?",
        choices: [
            "Convention on the Elimination of All Forms of Discrimination against Women",
            "Universal Declaration of Human Rights",
            "Convention on the Rights of the Child",
            "Convention on the Rights of Persons with Disabilities"
        ],
        answer: 2,
        explanation: "Based on the provided material, the Convention on the Rights of the Child is identified as the most ratified and embraced human rights UN instrument."
    },
    {
        number: 96,
        question: "The President of a country issues an executive order to address a national emergency. Which branch of government is responsible for enforcing this executive order?",
        choices: [
            "Judicial Branch",
            "Executive Branch",
            "Legislative Branch",
            "Administrative Branch"
        ],
        answer: 1,
        explanation: "The Executive Branch is responsible for implementing and enforcing executive orders issued by the President."
    },
    {
        number: 97,
        question: "How is a genogram being used in assessing family situations? I. It provides a visual representation of family structure across generations II. It helps identify patterns such as mental health issues, substance abuse, or domestic violence III. It maps the family’s linkages to external systems like schools, churches, and service agencies - Genogram IV. It illustrates emotional relationships and roles within the family",
        choices: [
            "I, II, and IV",
            "II and III",
            "I and III",
            "I, II, III, and IV"
        ],
        answer: 0,
        explanation: "A genogram represents family structure across generations and can identify patterns and emotional relationships within the family. Mapping external systems is associated with an ecomap."
    },
    {
        number: 98,
        question: "In the context of social work, what is one of the primary concerns associated with the neoliberal approach to social policy?",
        choices: [
            "Insufficient government funding for social programs",
            "Excessive emphasis on community-based interventions",
            "Decreased importance of individual empowerment",
            "Reduced emphasis on privatization of services"
        ],
        answer: 0,
        explanation: "Based on the provided material, insufficient government funding for social programs is identified as a primary concern associated with the neoliberal approach."
    },
    {
        number: 99,
        question: "Which of the following are key target areas under the United Nations' Sustainable Development Goals (SDGs)? I. Eradicating extreme poverty for all people everywhere II. Undermining universal access to safe and insecure drinking water III. Ending hunger and achieving food security IV. Improving housing conditions in informal and slum settlements",
        choices: [
            "I, II, and IV",
            "I, III, and IV",
            "II, III, and IV",
            "I, II, III, and IV"
        ],
        answer: 1,
        explanation: "The provided material identifies I, III, and IV as the correct combination of SDG target areas."
    },
    {
        number: 100,
        question: "Maria is a young woman who recently moved to a new city to pursue her studies. She finds herself struggling to adapt to the cultural norms of her peers and the new community. Which component of the social environment is primarily influencing Maria’s experience?",
        choices: [
            "Physical surroundings",
            "Cultural, economic, and social contexts",
            "Biological and psychological factors",
            "Technological resources"
        ],
        answer: 1,
        explanation: "Cultural, economic, and social contexts influence how individuals adapt to the norms, expectations, and relationships within a community."
    },
    {
        number: 101,
        question: "The GATHER approach to counseling has been documented to be effective in family planning programs. The more of the GATHER elements a counselor uses, the more satisfied clients are with their care and the more likely they are to use contraception. What does GATHER stand for?",
        choices: [
            "Greet, Ask, Tell, Help, Explain, and Return",
            "Greet, Answer, Tell, Help, Explain, and Receive",
            "Greet, Accept, Tell, Help, Explain, and Return",
            "Give, Answer, Tell, Help, Explain, and Receive"
        ],
        answer: 0,
        explanation: "GATHER stands for Greet, Ask, Tell, Help, Explain, and Return."
    }
];