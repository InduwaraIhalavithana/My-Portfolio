import { mergeTracks, withToolbox } from "../merge";
import type { GuideText } from "../types";
import { aiText } from "./ai";
import { aiExtras } from "./extras-ai";
import { foundationsExtras } from "./extras-foundations";
import { fullstackExtras } from "./extras-fullstack";
import { foundationsText } from "./foundations";
import { fullstackText } from "./fullstack";
import { proExtras, proText } from "./pro";
import { toolboxSi } from "./toolbox";

const merged = mergeTracks(
  [foundationsText, foundationsExtras],
  [fullstackText, fullstackExtras],
  [aiText, aiExtras],
  [proText, proExtras],
);

export const guideSi: GuideText = {
  meta: {
    title: "ඉංජිනේරුවෙකු වීමට: නොමිලේ ස්ලයිඩ මාලා",
    description:
      "Full-stack, AI, ML හෝ deep learning ඉංජිනේරුවෙකු වීමට දැනගත යුතු සියල්ල, මූලික කරුණුවල සිට අපහසු මාතෘකා දක්වා, නොමිලේ ලබාදෙන ස්ලයිඩ මාලාවකින්. රූප, රූප සටහන්, සැබෑ උදාහරණ සහ ප්‍රශ්නාවලි සහිතයි.",
  },
  ui: {
    eyebrow: "නොමිලේ ඉදිරිපත් කිරීම් මාලාව",
    title: "Full-stack හෝ AI/ML ඉංජිනේරුවෙකු වීමට ඔබ දැනගත යුතු දේ",
    intro:
      "මූලික කරුණුවල සිට අපහසු මාතෘකා දක්වා පියවරෙන් පියවර රැගෙන යන කෙටි ස්ලයිඩ මාලා 30ක්. සෑම අදහසක් සමඟම රූපයක්, සැබෑ උදාහරණයක් සහ එය භාවිත කළ යුතු අවස්ථා දැක්වේ. සෑම මාලාවක්ම සාරාංශයකින් සහ කෙටි ප්‍රශ්නාවලියකින් අවසන් වේ.",
    stats: { topics: "ස්ලයිඩ", tracks: "මාර්ග", free: "මිල", freeValue: "නොමිලේ" },
    tracks: { all: "සියල්ල", foundations: "මූලික අඩිතාලම", fullstack: "Full-stack", ai: "AI / ML / DL", pro: "ඉංජිනේරුවෙකු ලෙස වැඩ කිරීම" },
    trackIntro: {
      foundations: "ඔබ කුමන මාර්ගය තෝරා ගත්තත්, සෑම ඉංජිනේරුවෙකුටම අවශ්‍ය දේ.",
      fullstack: "බ්‍රවුසරයේ සිට දත්ත සමුදාය දක්වා, යෙදුම ධාවනය වන server එක දක්වා.",
      ai: "පදනම වන ගණිතයේ සිට model පුහුණු කිරීම සහ LLM යෙදුම් සෑදීම දක්වා.",
      pro: "මූලධර්ම, කණ්ඩායම් වැඩ, සැලසුම්කරණය සහ ලේඛනකරණය: සැබෑ ව්‍යාපෘති සාර්ථකව නිම කරන ආකාරය.",
    },
    priority: { must: "අනිවාර්යයි", should: "දැනගත යුතුයි", good: "දැනගැනීම වටී" },
    priorityHint: "පිළිවෙළින් ඉදිරියට යන්න: සෑම මාලාවක්ම ඊට පෙර මාලා මත ගොඩනැගී ඇත.",
    analogy: "සරල උපමාවක්",
    example: "සැබෑ උදාහරණය",
    useWhen: "භාවිත කළ යුතු අවස්ථා",
    backToPortfolio: "Portfolio වෙත ආපසු",
    browseTopics: "සියලු මාලා බලන්න",
    decksTitle: "ස්ලයිඩ මාලා, පිළිවෙළින්",
    decksIntro: "1 වන මාලාවෙන් ආරම්භ කර පිළිවෙළින් ඉදිරියට යන්න. එක් මාලාවකට මිනිත්තු 5–10ක් පමණ ගත වේ.",
    slides: "ස්ලයිඩ {count}",
    start: "අරඹන්න",
    deck: "මාලාව",
    slideOf: "ස්ලයිඩය {n} / {total}",
    previous: "පෙර",
    next: "ඊළඟ",
    allDecks: "සියලු මාලා",
    outline: "මෙම මාලාවේ ස්ලයිඩ",
    meet: "ඔබේ මඟපෙන්වන්නා",
    youWillLearn: "මෙම මාලාවෙන් ඉගෙන ගන්නා දේ",
    recapTitle: "සාරාංශය: මේවා මතක තබා ගන්න",
    quizTitle: "දැනුම පරීක්ෂාව",
    quizIntro: "කෙටි ප්‍රශ්න හතරක්. මෙය අනිවාර්ය නොවේ, නමුත් ඉගෙන ගත් දේ මතකයේ රඳවා ගැනීමට උපකාරී වේ.",
    quizSkip: "ප්‍රශ්නාවලිය මඟ හරින්න",
    check: "පිළිතුර බලන්න",
    correct: "නිවැරදියි!",
    wrong: "එය නිවැරදි නැත.",
    retry: "නැවත උත්සාහ කරන්න",
    nextDeck: "ඊළඟ මාලාව",
    finished: "මාලාව සම්පූර්ණයි!",
    finishedIntro: "ඉතා හොඳයි. ඊළඟ මාලාවට ගොස් මේ ගමන දිගටම කරගෙන යන්න.",
    keyboardHint: "ඉඟිය: ← → ඊතල යතුරු භාවිත කරන්න, නැතහොත් තිරය swipe කරන්න.",
    toolboxTitle: "මෙවලම් පෙට්ටිය: අද බහුලව භාවිත වන මෙවලම්",
    toolboxIntro: "මෙම මාතෘකාවට අදාළ ජනප්‍රිය මෙවලම්, සහ එක් එක් මෙවලම වඩාත් සුදුසු වන්නේ කවදාද යන්න.",
    bestFor: "වඩාත් සුදුසු",
    pickWhen: "තෝරා ගත යුතු අවස්ථා",
    howToChoose: "නිවැරදි මෙවලම තෝරා ගන්නේ කෙසේද",
  },
  paths: {
    eyebrow: "මෙතැනින් අරඹන්න",
    title: "ඔබේ මාර්ගය තෝරන්න",
    intro: "බහුලව දක්නට ලැබෙන රැකියා භූමිකා හතරක්. එක් එක් භූමිකාවේ කාර්යය කියවා, ඊට අදාළ ඉගෙනුම් පිළිවෙළ වමේ සිට දකුණට අනුගමනය කරන්න.",
    roadmapTitle: "ඉගෙනුම් පිළිවෙළ",
    overlapTitle: "මෙම භූමිකා අතර ඇති සමානකම්",
    overlap:
      "සියල්ලටම පොදු පදනමක් ඇත: Python, Git, දත්ත හැසිරවීම සහ ඔබේ වැඩ deploy කිරීම. AI ඉංජිනේරුවෙකු, LLM ගැනද දන්නා full-stack ඉංජිනේරුවෙකුට බොහෝ සමාන ය. ML සහ deep learning ඉංජිනේරුවන් model පුහුණු කිරීම ගැන ඊටත් වඩා ගැඹුරින් වැඩ කරයි. කුඩා සමාගම්වල බොහෝ විට මේ සියල්ල කරන්නේ එකම පුද්ගලයෙකි.",
    roles: {
      fullstack: {
        name: "Full-stack ඉංජිනේරු",
        does: "සම්පූර්ණ වෙබ් යෙදුමක්ම සාදයි: පරිශීලකයින් දකින තිර, ඒවා පිටුපස ක්‍රියා කරන API එක සහ දත්ත ගබඩා කරන දත්ත සමුදාය.",
        builds: "Online වෙළඳසැල්, වෙන් කිරීම් (booking) පද්ධති, dashboard, සමාජ මාධ්‍ය යෙදුම්.",
        key: "React, API framework එකක්, SQL, auth, Docker, CI/CD.",
      },
      ai: {
        name: "AI ඉංජිනේරු",
        does: "දැනට පවතින AI model භාවිතයෙන් chatbot, AI සහායකයින් සහ බුද්ධිමත් සෙවුම් පද්ධති වැනි නිෂ්පාදන සාදයි.",
        builds: "Chat සහායකයින්, ලේඛනවලින් පිළිතුරු සොයා දෙන පද්ධති, මෙවලම් භාවිත කරන AI agent.",
        key: "LLM API, prompting, RAG, vector දත්ත සමුදා, agent, evals.",
      },
      ml: {
        name: "ML ඉංජිනේරු",
        does: "සැබෑ දත්ත භාවිතයෙන් machine-learning model පුහුණු කර, පරීක්ෂා කර, ක්‍රියාත්මක කරයි. සැබෑ භාවිතයේදී (production) ඒවා දිගටම නිවැරදිව ක්‍රියා කරන බවද සහතික කරයි.",
        builds: "නිර්දේශ පද්ධති, වංචා හඳුනාගැනීම, ඉල්ලුම් පුරෝකථනය, බෝග නිර්දේශ.",
        key: "scikit-learn, feature engineering, මිනුම්, PyTorch, MLOps.",
      },
      dl: {
        name: "Deep learning ඉංජිනේරු",
        does: "රූප, හඬ සහ පෙළ හඳුනා ගැනීමට neural network නිර්මාණය කර පුහුණු කරයි. මෙම වැඩ බොහෝ විට GPU මත සිදු කෙරේ.",
        builds: "රූප හඳුනාගැනීම, හඬ පෙළ බවට හැරවීම, විශේෂිත භාෂා model.",
        key: "Neural network ගණිතය, CNN, Transformer, fine-tuning, GPU.",
      },
    },
    labels: { does: "ඔවුන් කරන දේ", builds: "ඔවුන් සාදන දේ", key: "ප්‍රධාන කුසලතා", steps: "ඉගෙනුම් පිළිවෙළ" },
  },
  practice: {
    eyebrow: "පුහුණුව",
    title: "සාදමින් ඉගෙන ගන්න",
    intro: "කියවීම පළමු පියවර පමණි. මාතෘකාවක් සැබවින්ම ප්‍රගුණ වන්නේ එය භාවිතයෙන් යමක් සාදන විටයි. ඔබේ මට්ටමට ගැළපෙන ව්‍යාපෘතියක් තෝරා ගන්න.",
    levels: { beginner: "ආරම්භක", intermediate: "මධ්‍යම", advanced: "රැකියාවට සූදානම්" },
    projects: {
      foundations: {
        beginner: ["Python භාවිතයෙන් terminal එකේ ක්‍රියා කරන 'කළ යුතු දේ' ලැයිස්තුවක්", "පරීක්ෂණ (tests) සහිත අංක අනුමාන කිරීමේ ක්‍රීඩාවක්"],
        intermediate: ["මාතෘකා අනුව පහසු LeetCode ගැටලු 50ක් විසඳන්න", "Design pattern පහක් ඔබේම කුඩා උදාහරණ ලෙස ලියා බලන්න"],
        advanced: ["ගොනුවල snapshot සුරකින, Git වැනි කුඩා මෙවලමක්", "එකවර thread කිහිපයක් භාවිත කරන ගොනු බාගැනීමේ මෙවලමක්"],
      },
      fullstack: {
        beginner: ["HTML, CSS සහ dark mode සහිත පුද්ගලික වෙබ් අඩවියක්", "නොමිලේ ලැබෙන API එකකින් දත්ත ගන්නා කාලගුණ පිටුවක්"],
        intermediate: ["Login, REST API සහ PostgreSQL සහිත සටහන් යෙදුමක්", "WebSockets සහිත chat කාමරයක්"],
        advanced: ["භූමිකා, ගෙවීම් (test mode), පරීක්ෂණ සහ CI/CD සහිත වෙළඳපොළක්", "එය Docker, HTTPS සහ ඔබේම domain නාමයක් සමඟ deploy කරන්න"],
      },
      ai: {
        beginner: ["Linear regression භාවිතයෙන් නිවාස මිල පුරෝකථනය කරන්න", "scikit-learn භාවිතයෙන් මල් වර්ග හෝ අතින් ලියූ ඉලක්කම් වර්ගීකරණය කරන්න"],
        intermediate: ["Precision සහ recall නිවැරදිව මැන බැලූ spam පෙරහනක්", "කලින් පුහුණු කළ CNN එකක් භාවිත කරන රූප වර්ගීකරණ පද්ධතියක්"],
        advanced: ["ඔබේ විශ්වවිද්‍යාල සටහන්වලින් පිළිතුරු දෙන RAG chatbot එකක්", "Model එකක් API එකක් හරහා ලබා දී, එහි ක්‍රියාකාරිත්වය නිරීක්ෂණය කරන්න"],
      },
    },
    resourcesTitle: "මා නිර්දේශ කරන නොමිලේ සම්පත්",
    resourcesIntro: "සියල්ල නොමිලේ. සම්පත් පහක් පටන් ගෙන අතරමඟ නවත්වනවාට වඩා, මාතෘකාවකට එකක් තෝරා එය සම්පූර්ණ කරන්න.",
    resources: {
      cs50: "පරිගණක විද්‍යාව මුල සිටම උගන්වන Harvard විශ්වවිද්‍යාලයේ ප්‍රසිද්ධ පාඨමාලාව.",
      "refactoring-guru": "සෑම design pattern එකක්ම රූප සහ කේත උදාහරණ සමඟ.",
      "roadmap-sh": "සෑම developer භූමිකාවකටම පියවරෙන් පියවර ඉගෙනුම් මාර්ග සිතියම්.",
      mdn: "HTML, CSS සහ JavaScript සඳහා විශ්වසනීයම යොමු මූලාශ්‍රය.",
      "react-dev": "සජීවී උදාහරණ සහිත නිල React පාඨමාලාව.",
      "full-stack-open": "නොමිලේ විශ්වවිද්‍යාල පාඨමාලාවක්: React, Node, දත්ත සමුදා, පරීක්ෂණ.",
      "system-design-primer": "විශාල පද්ධති සාදන ආකාරය, සම්මුඛ පරීක්ෂණ ප්‍රශ්න සමඟ.",
      owasp: "වෙබ් යෙදුම්වල බහුලවම දක්නට ලැබෙන ආරක්ෂක අවදානම් දහය.",
      "google-ml": "Machine learning සඳහා වේගවත්, ප්‍රායෝගික හැඳින්වීමක්.",
      "kaggle-learn": "නොමිලේ ලැබෙන notebook සහ දත්ත සමඟ කෙටි ප්‍රායෝගික පාඩම්.",
      "3b1b": "Neural network ඉගෙන ගන්නා ආකාරය දෘශ්‍යමය ලෙස පෙන්වන අලංකාර වීඩියෝ.",
      d2l: "කේත උදාහරණ සහිත, නොමිලේ කියවිය හැකි deep learning පොතක්.",
      karpathy: "Neural network සහ කුඩා GPT එකක් මුල සිටම පියවරෙන් පියවර සාදා බලන්න.",
      "hugging-face": "Transformer, LLM සහ AI agent පිළිබඳ නොමිලේ පාඨමාලා.",
      "made-with-ml": "ML model එකක් notebook එකේ සිට සැබෑ භාවිතය (production) දක්වා ගෙන යන ආකාරය.",
    },
    interviewTitle: "එක් මිනිත්තුවේ පරීක්ෂණය",
    interview: [
      "“අනිවාර්යයි” ලෙස සලකුණු කළ මාතෘකාවක් තෝරා, සටහන් නොබලා මිනිත්තුවක් ඇතුළත එය ශබ්ද නඟා පැහැදිලි කරන්න.",
      "එය භාවිත වන සැබෑ උදාහරණයක් සිහිපත් කරන්න.",
      "එහි එක් සීමාවක් කියන්න: එය භාවිත නොකළ යුත්තේ කවදාද?",
      "අමතක වුවහොත්, ස්ලයිඩය නැවත බලන්න. එසේ කිරීමෙන් එය මතකයේ හොඳින් රැඳේ.",
    ],
  },
  sections: withToolbox(merged.sections, toolboxSi),
  topics: merged.topics,
};
