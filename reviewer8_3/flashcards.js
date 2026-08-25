const flashcards = [
    {
        number: 1,
        question: "Which of Freud's three main structures of personality is described as 'unconscious' and 'pleasure seeking'?",
        choices: [
            "Superego",
            "Id",
            "Projection",
            "Ego",
            "Subliminal perception"
        ],
        answer: 2,
        explanation: "The id is the unconscious part of personality that operates according to the pleasure principle and seeks immediate gratification."
    },
    {
        number: 2,
        question: "In the present time, how does a psychiatrist typically treat his/her patients?",
        choices: [
            "By giving them projective tests",
            "Through hypnosis",
            "Through psychoanalysis",
            "By studying behavioral techniques",
            "By prescribing medication"
        ],
        answer: 3,
        explanation: "The provided answer key identifies psychoanalysis as the answer."
    },
    {
        number: 3,
        question: "What isn't a Freudian stage of development?",
        choices: [
            "Latency",
            "Oral",
            "Repression",
            "Genital",
            "Phallic"
        ],
        answer: 3,
        explanation: "Repression is a defense mechanism, not one of Freud's psychosexual stages. The stages include oral, anal, phallic, latency, and genital."
    },
    {
        number: 4,
        question: "Bill has been having family problems lately. He has started drinking heavily the past few months. Whenever his friends approach him and accuse him of having a drinking problem, he acts like he doesn't know what they're talking about and denies the whole thing. Bill is illustrating which of the following?",
        choices: [
            "Projection",
            "Repression",
            "Regression",
            "Denial"
        ],
        answer: 4,
        explanation: "Denial is a defense mechanism in which a person refuses to accept or acknowledge an unpleasant reality."
    },
    {
        number: 5,
        question: "According to Freud, which stage of development pertains to the fact that anything involving the mouth is a sexual activity?",
        choices: [
            "Anal",
            "Oral",
            "Latency",
            "Phallic"
        ],
        answer: 2,
        explanation: "The oral stage is Freud's first psychosexual stage and focuses on pleasure obtained through the mouth."
    },
    {
        number: 6,
        question: "James's favorite uncle passes away from a long battle with illness, but he refuses to believe that it happened. This is an example of what defense mechanism?",
        choices: [
            "Projection",
            "Sublimation",
            "Repression",
            "Denial"
        ],
        answer: 4,
        explanation: "Denial involves refusing to accept a painful or distressing reality."
    },
    {
        number: 7,
        question: "Restrictions on visitation of parents to their children during hospitalization changed to a policy that allows parents complete access to their children. The change occurred because of research on the emotional effects of mother-child separation during hospitalization conducted by whom?",
        choices: [
            "Bronfenbrenner",
            "Erikson",
            "Bowlby",
            "Freud",
            "None of these"
        ],
        answer: 3,
        explanation: "John Bowlby's work on attachment and the effects of separation helped establish the importance of maintaining parent-child contact."
    },
    {
        number: 8,
        question: "Around what age do most infants begin to show separation anxiety accompanied by wariness of strangers?",
        choices: [
            "6 months",
            "12 months",
            "8 months",
            "24 months"
        ],
        answer: 1,
        explanation: "The provided answer key identifies approximately 6 months as the answer."
    },
    {
        number: 9,
        question: "John recently survived a car accident. Doctors determined that he had suffered some damage to the frontal region of his brain during the accident. What factor associated with cognitive limitations and emotional problems might be affecting John's functioning since the accident?",
        choices: [
            "Genetic factor",
            "Emotional factor",
            "Psychological factor",
            "Affective factor"
        ],
        answer: 2,
        explanation: "The provided answer key identifies emotional factors as affecting John's functioning."
    },
    {
        number: 10,
        question: "Jane, a preschooler, insists on dressing herself each morning for school, even though she generally selects mismatching outfits, misses buttons, and wears her shoes on the wrong feet. When her mother tries to dress Jane or fix her outfit, Jane brushes her mother off and insists on doing it herself. What stage of psychosocial development best describes Jane's behavior?",
        choices: [
            "Trust vs. Mistrust",
            "Autonomy vs. Shame and Doubt",
            "Initiative vs. Guilt",
            "Industry vs. Inferiority"
        ],
        answer: 3,
        explanation: "The provided answer key identifies Initiative vs. Guilt as the answer."
    },
    {
        number: 11,
        question: "The central theme of Erikson's theory of psychosocial stages was the development of:",
        choices: [
            "Personality",
            "Psychosocial conflict",
            "Social status",
            "Ego identity"
        ],
        answer: 2,
        explanation: "Erikson's theory emphasizes psychosocial conflicts or crises that individuals encounter throughout development."
    },
    {
        number: 12,
        question: "At each stage of Erikson's theory of psychosocial development, people experience a(n) _________ that serves as a turning point.",
        choices: [
            "Epiphany",
            "Conflict",
            "Paradigm shift",
            "Turmoil"
        ],
        answer: 2,
        explanation: "Each stage involves a psychosocial conflict or crisis that must be addressed for healthy development."
    },
    {
        number: 13,
        question: "The stage that occurs between birth and one year of age is concerned with:",
        choices: [
            "Trust vs. Mistrust",
            "Autonomy vs. Shame and Doubt",
            "Initiative vs. Guilt",
            "Identity vs. Role Confusion"
        ],
        answer: 1,
        explanation: "Erikson's first psychosocial stage is Trust vs. Mistrust and occurs during infancy."
    },
    {
        number: 14,
        question: "According to Skinner, unhealthy behavior:",
        choices: [
            "Can be traced to congenital deficiencies.",
            "Does not exist.",
            "Is a means of coping with excessive social control.",
            "Is the result of permissive training during childhood."
        ],
        answer: 4,
        explanation: "The provided answer key identifies permissive training during childhood as the answer."
    },
    {
        number: 15,
        question: "The crisis that arises in young adulthood is concerned with:",
        choices: [
            "Trust vs. Mistrust",
            "Industry vs. Inferiority",
            "Integrity vs. Despair",
            "Intimacy vs. Isolation"
        ],
        answer: 4,
        explanation: "Erikson's young adulthood stage centers on Intimacy vs. Isolation."
    },
    {
        number: 16,
        question: "Erik Erikson's interest in identity developed as a result of:",
        choices: [
            "Discovering his parents had lied to him about his parentage.",
            "His early wandering throughout Europe.",
            "Studies of displaced social groups in the United States.",
            "All of the above."
        ],
        answer: 2,
        explanation: "The provided answer key identifies Erikson's early wandering throughout Europe as the answer."
    },
    {
        number: 17,
        question: "According to Erikson, what is the major conflict faced during adolescence?",
        choices: [
            "Autonomy vs. Shame and Doubt",
            "Intimacy vs. Isolation",
            "Identity vs. Role Confusion",
            "Generativity vs. Stagnation"
        ],
        answer: 3,
        explanation: "Adolescence is associated with the psychosocial conflict of Identity vs. Role Confusion."
    },
    {
        number: 18,
        question: "Eight-year-old Steven has a difficult time making friends at school. He has trouble completing his schoolwork accurately and on time, and as a result, receives little positive feedback from his teacher and parents. According to Erikson's theory, failure at this stage of development results in?",
        choices: [
            "Feelings of inferiority",
            "A sense of guilt",
            "A poor sense of self",
            "Mistrust"
        ],
        answer: 1,
        explanation: "During Industry vs. Inferiority, failure to develop competence can lead to feelings of inferiority."
    },
    {
        number: 19,
        question: "The central conflict in the eighth stage of Erikson's theory focuses on integrity vs. despair and involves reflecting back on your life. Those who are successful in this stage emerge with:",
        choices: [
            "Hope",
            "Fidelity",
            "Purpose",
            "Wisdom"
        ],
        answer: 4,
        explanation: "Successfully resolving Integrity vs. Despair results in the virtue of wisdom."
    },
    {
        number: 20,
        question: "Fixation in the oral stage of development manifested by an obsession with stimulating the mouth.",
        choices: [
            "Anal fixation",
            "Mouth fixation"
        ],
        answer: 2,
        explanation: "The provided answer key identifies mouth fixation as the answer."
    },
    {
        number: 21,
        question: "Resignation solution: a desire to be free of others, isolating one's self to avoid involvement with others and needing to restrict one's life within narrow boundaries. Which choice fits the description?",
        choices: [
            "Moving Away",
            "Moving Against",
            "Moving Toward",
            "Moving Downward"
        ],
        answer: 1,
        explanation: "Moving Away describes withdrawal, isolation, and distancing oneself from others."
    },
    {
        number: 22,
        question: "Self-effacing solution: the appeal to be loved, accepting one's helplessness and becoming compliant with an exaggerated need for affection and approval. Which choice fits the description?",
        choices: [
            "Moving Away",
            "Moving Against",
            "Moving Toward",
            "Moving Downward"
        ],
        answer: 3,
        explanation: "Moving Toward involves seeking affection, approval, and security through dependence and compliance."
    },
    {
        number: 23,
        question: "Self-expansive solution: an attempt at mastery, rebelling and resisting others to protect oneself from a threatening environment, and an exaggerated need for power. Which choice fits the description?",
        choices: [
            "Moving Away",
            "Moving Against",
            "Moving Toward",
            "Moving Downward"
        ],
        answer: 2,
        explanation: "Moving Against involves hostility, resistance, competition, and attempts to gain power or control."
    },
    {
        number: 24,
        question: "A set of ideas used to justify and defend the majority's interests and actions is known as:",
        choices: [
            "Ideology",
            "Dogma",
            "Doctrine",
            "Code of Ethics"
        ],
        answer: 1,
        explanation: "Ideology is a system of ideas or beliefs that can be used to justify social arrangements and interests."
    },
    {
        number: 25,
        question: "What concept has been somewhat marginal to criminology because it appears simplistic and is often perceived as supporting high levels of discipline, regulation, and punishment?",
        choices: [
            "Control Theory",
            "Deviancy",
            "Policy",
            "Authority"
        ],
        answer: 1,
        explanation: "Control theory focuses on the social controls and restraints that discourage individuals from engaging in deviant behavior."
    },
    {
        number: 26,
        question: "What is the central assumption behind control theories?",
        choices: [
            "That deviance is the result of an absence of social control or restraint",
            "That deviance is a social phenomenon",
            "That deviance is controlled by society",
            "That deviance is relative to different cultures, traditions, and practices"
        ],
        answer: 1,
        explanation: "Control theories assume that deviance occurs when social controls or restraints are weak or absent."
    },
    {
        number: 27,
        question: "These are the components of a person's bond to society, EXCEPT: I. Attachment III. Assignment V. Belief II. Commitment IV. Involvement",
        choices: [
            "Both III & V",
            "V only",
            "III only",
            "I only",
            "None of the above"
        ],
        answer: 3,
        explanation: "The provided answer key identifies III only. The standard components of Hirschi's social bond are attachment, commitment, involvement, and belief."
    },
    {
        number: 28,
        question: "What theory points to society as the one which created deviance by identifying particular members as deviant?",
        choices: [
            "Differential Association Theory",
            "Labeling Theory",
            "Social Contract Theory",
            "Deterrence Perspective",
            "Social Process Theory"
        ],
        answer: 2,
        explanation: "Labeling theory argues that deviance is partly created through society's process of labeling certain individuals or behaviors as deviant."
    },
    {
        number: 29,
        question: "What concept believes in capitalism as the root of all crime and believes in a utopian society?",
        choices: [
            "Differential Association Theory",
            "Labeling Theory",
            "Social Contract Theory",
            "Radical Theory",
            "Social Process Theory"
        ],
        answer: 4,
        explanation: "Radical theory examines crime through the lens of capitalism, class inequality, and power relationships."
    },
    {
        number: 30,
        question: "What is Symbolic Interaction Theory?",
        choices: [
            "Believes in the interaction of nature and nurture.",
            "People are motivated to act based on the meanings they assign to people and events.",
            "A prediction about yourself causing you to behave in such a way that it comes true.",
            "A relatively stable set of perceptions that people hold about themselves."
        ],
        answer: 2,
        explanation: "Symbolic interactionism emphasizes that people interpret and act toward others and situations based on the meanings they assign to them."
    },
    {
        number: 31,
        question: "These are the central themes of Symbolic Interactionism, EXCEPT:",
        choices: [
            "The importance of meanings for human behavior.",
            "The importance of the self-concept.",
            "The relationship between the individual and society.",
            "The relationship between the inner self and the outer self.",
            "None of the above"
        ],
        answer: 4,
        explanation: "The relationship between the inner self and outer self is not identified as one of the central themes of symbolic interactionism in the provided material."
    },
    {
        number: 32,
        question: "What is self-fulfilling prophecy?",
        choices: [
            "A relatively stable set of perceptions that people hold about themselves.",
            "A prediction about yourself making you behave in such a way that it comes true.",
            "A shared system of verbal and non-verbal symbols.",
            "The conception of self.",
            "The fulfillment of the fictional self."
        ],
        answer: 2,
        explanation: "A self-fulfilling prophecy occurs when a person's expectation or prediction influences behavior in a way that causes the expected outcome to occur."
    },
    {
        number: 33,
        question: "What is language?",
        choices: [
            "A relatively stable set of perceptions that people hold about themselves.",
            "A prediction about yourself making you behave in such a way that it comes true.",
            "A shared system of verbal and non-verbal symbols.",
            "The conception of self."
        ],
        answer: 3,
        explanation: "Language is a shared system of verbal and non-verbal symbols used for communication and meaning-making."
    },
    {
        number: 34,
        question: "What are the three structures of personality development?",
        choices: [
            "Id, ego, and superego",
            "Social, emotional, and mental",
            "Conscious, subconscious, and preconscious",
            "Inner, outer, and the whole"
        ],
        answer: 1,
        explanation: "Freud's structural model of personality consists of the id, ego, and superego."
    },
    {
        number: 35,
        question: "The Oedipus complex, in psychoanalytic theory, is a group of largely unconscious ideas and feelings which center on the desire to possess the parent of the same sex and eliminate the parent of the opposite sex. True or False?",
        choices: [
            "True",
            "False",
            "False, because it is a group of subconscious, not unconscious, ideas.",
            "False, it should be Electra Complex, not Oedipus Complex."
        ],
        answer: 2,
        explanation: "The provided answer key identifies False. The traditional description of the Oedipus complex involves a child's desire for the opposite-sex parent and rivalry with the same-sex parent."
    },
    {
        number: 36,
        question: "According to Freud, the mind is approximately:",
        choices: [
            "80% conscious and 20% unconscious",
            "60% conscious and 40% unconscious",
            "70% unconscious and 30% conscious",
            "90% unconscious and 10% conscious"
        ],
        answer: 4,
        explanation: "The provided answer key identifies the mind as approximately 90% unconscious and 10% conscious."
    },
    {
        number: 37,
        question: "According to Erikson's Psychosocial Stages of Development, 'Identity versus Role Confusion' is a characteristic of what developmental stage?",
        choices: [
            "Infancy",
            "Pre-adolescence",
            "Latency",
            "Adolescence"
        ],
        answer: 4,
        explanation: "Identity vs. Role Confusion is Erikson's psychosocial crisis associated primarily with adolescence."
    },
    {
        number: 38,
        question: "A soft body, underdeveloped muscles, round shape and over-developed digestive system, love of food, tolerant, evenness of emotions, love of comfort, sociable, good-humored, relaxed, and need for affection. Which choice best fits these descriptions?",
        choices: [
            "Endomorphic",
            "Ectomorphic",
            "Mesomorphic",
            "Somatoformic"
        ],
        answer: 1,
        explanation: "Endomorphic body types are traditionally described as having a softer, rounder body shape and are associated in this theory with comfort-seeking and sociability."
    },
    {
        number: 39,
        question: "Which traditional family development theory defines the family as 'socially sanctioned cohabitation of a man and a woman who have preferential or exclusive enjoyment of economic and sexual rights over one another and are committed to raise the children brought to life by the woman'?",
        choices: [
            "Psychoanalytic Theory",
            "Structural-Functional Theory",
            "Social Exchange Theory",
            "Social Learning Theory"
        ],
        answer: 2,
        explanation: "Structural-functional theory examines the family in terms of its socially recognized structure, roles, and functions within society."
    },
    {
        number: 40,
        case: "case1",
        question: "Human development is profoundly affected by the isolated events occurring in his or her environment. This is a view of what theory?",
        choices: [
            "Ecological System Theory",
            "Strengths Perspective",
            "Communication and Conflict Theory",
            "Family Systems Theory"
        ],
        answer: 1,
        explanation: "Ecological systems theory emphasizes how environmental contexts and interactions influence human development."
    },
    {
        number: 41,
        case: "case1",

        question: "What refers to a document issued by the Secretary of the Department of Social Welfare and Development (DSWD) or the Secretary's duly authorized representative as provided for by Republic Act No. 9523?",
        choices: [
            "CDCLAA",
            "CDCLLA",
            "CCDLAA",
            "CCDLA"
        ],
        answer: 1,
        explanation: "The provided answer key identifies CDCLAA as the answer."
    },
    {
        number: 42,
        case: "case1",

        question: "When was RA 11222, also known as 'An Act Allowing the Rectification of Simulated Birth Records and Prescribing Administrative Adoption Proceedings for the Purpose,' signed by the President?",
        choices: [
            "February 28, 2019",
            "February 29, 2019",
            "March 28, 2019",
            "March 29, 2019"
        ],
        answer: 2,
        explanation: "The provided answer key identifies February 29, 2019 as the answer."
    },
    {
        number: 43,
        case: "case1",

        question: "When was RA 11222 published in the Official Gazette to inform people?",
        choices: [
            "February 28, 2019",
            "March 14, 2019",
            "March 29, 2019",
            "March 28, 2019"
        ],
        answer: 2,
        explanation: "The provided answer key identifies March 14, 2019 as the answer."
    },
    {
        number: 44,
        case: "case1",

        question: "When was RA 11222 effective?",
        choices: [
            "February 28, 2019",
            "March 14, 2019",
            "March 29, 2019",
            "March 28, 2019"
        ],
        answer: 3,
        explanation: "The provided answer key identifies March 29, 2019 as the effective date."
    },
    {
        number: 45,
        case: "case1",

        question: "In making the Social Case Study of the Child for Adoption, the Social Worker may include the Child Developmental History. In line with this, at what age can the child be able to drink from a cup?",
        choices: [
            "0-3 months",
            "4-6 months",
            "0-1 month",
            "7-11 months"
        ],
        answer: 4,
        explanation: "The provided answer key identifies 7-11 months as the developmental period when the child can drink from a cup."
    },
    {
        number: 46,
        case: "case1",

        question: "At what age in the developmental milestones can the child be able to feed self neatly, with minimal spilling?",
        choices: [
            "1-3 years old",
            "4-5 years old",
            "8-11 months",
            "7 years old"
        ],
        answer: 1,
        explanation: "The provided answer key identifies 1-3 years old as the appropriate developmental period."
    },
    {
        number: 47,
        case: "case1",

        question: "At what age in the developmental milestones can the child be able to draw a circle and square?",
        choices: [
            "1-2 years",
            "3-6 years",
            "7-9 years",
            "10-11 months"
        ],
        answer: 2,
        explanation: "The provided answer key identifies 3-6 years as the developmental period for this milestone."
    },
    {
        number: 48,
        case: "case1",

        question: "All petitions, documents, records, and papers relating to administrative adoption proceedings in the files of the city or municipal SWDOs, the DSWD central and field offices, or any other agency or institution participating in such proceedings shall be strictly _______.",
        choices: [
            "Confidential",
            "Private",
            "Off limit",
            "Unrecorded"
        ],
        answer: 1,
        explanation: "Adoption-related petitions, records, and documents are required to be kept confidential."
    },
    {
        number: 49,
        case: "case1",

        question: "When did President Rodrigo Duterte sign Republic Act 11469, or the 'Bayanihan to Heal as One Act,' into law?",
        choices: [
            "March 22, 2020",
            "March 24, 2020",
            "March 26, 2020",
            "March 25, 2020"
        ],
        answer: 3,
        explanation: "The provided answer key identifies March 26, 2020 as the date."
    },
    {
        number: 50,
        case: "case2",

        question: "What was the date that SARS-CoV-2 was confirmed in the Philippines?",
        choices: [
            "January 24, 2020",
            "January 28, 2020",
            "January 18, 2020",
            "January 30, 2020"
        ],
        answer: 4,
        explanation: "The provided answer key identifies January 30, 2020 as the date."
    }
];

const caseStudies = {

    case1: {
        title: "Case 1",
        story: `On November 20, 2020, Mark was 1 month old when entrusted by Victoria T.
Jimenez, his birth mother to Spouses Martin and Claire Roco at their residence in
Barangay Basdiot, Masbate.
As recalled by Spouses Roco, the child was wearing white old clothes without short
and blue mini shoes. He had a reddish skin because of the rushes, his tummy is big
and the child was very thin. Despite his physical condition, the child was observed
livelier. It was the biological mother Victoria who gave name to the child which
means instrument of God is merciful to other.
Mark is presently under the custodial care of Mr Martin and Claire Roco. They are
presently residing at Barangay Basdiot, Masbate. The place is a few meters away
from the national road and public utility jeepney stop and it is accessible to any
vehicle. The couple’s residence is a mountain resort with a bungalow type with tiled
floors, garage, entry porch, spacious living room, dining area, kitchen, 4 bedrooms
with separate toilet and baths. It is complete with fixtures, furniture and appliances.
They also owned a mountain resort with 2 swimming pools.
There are appliances such as refrigerator, air conditioner, television sets, electric
fans, blenders, vacuum cleaner, washing machine, and others. They also have
generator used whenever there is no electricity. The receiving area were decorated
with plants and other furniture’s pleasing to the eyes of the visitors. Their mountain
resort is estimated to 1 hectare and a wonderful garden.
Mark sleeps with spouses Roco in one bedroom since he is the youngest and the
baby of the family. Although they trained the child to sleep in his own room but
Mark is comfortable to sleep with his known parents. He is personally taken cared
by Mrs. Claire Roco. As observed by the undersigned, Mark has all the attention of
everybody in their family being the youngest child in the family.
Roco couple file a petition to legally adopt the child.`
    },

    case2: {
        title: "Case 2",
        story: `SARS-CoV-2 viral RNA was reported to be detected by PCR on the initial swabs and
she was identified as the first confirmed COVID-19 case in the Philippines. Her
symptoms resolved, and she was discharged. Patient 2, a 44-year-old male, had
symptoms of fever, cough, and chills. Influenza B and Streptococcus pneumoniae were
detected by PCR on initial NPS/OPS swabs. He was treated for community-acquired
pneumonia with intravenous antibiotics, but his condition deteriorated and he required
intubation. On January 31, SARS-CoV-2 viral RNA was reported to be detected by PCR
on the initial swabs, and he was identified as the 2nd confirmed COVID-19 infection in
the Philippines. On February 1, the patient’s condition deteriorated, and following a
cardiac arrest, it was not possible to revive him. He was thus confirmed as the first
COVID-19 death outside of China.`
    }

};