import "./style.css";
import "./app.css";

const tarotCards = [
  {
    name: "The Fool",
    meanings:
      "Beginnings, spontaneity, innocence, adventure, free spirit, taking a leap of faith.",
    description:
      "The Fool is about embarking on a journey, filled with potential and possibility. It signifies a fresh start and stepping into the unknown without fear of the future.",
  },
  {
    name: "The Magician",
    meanings:
      "Manifestation, resourcefulness, willpower, taking action, skill.",
    description:
      "The Magician is a powerful figure who has all the tools necessary to achieve their goals. It represents the ability to make things happen and manifest one's desires.",
  },
  {
    name: "The High Priestess",
    meanings: "Intuition, mystery, subconscious, wisdom, hidden knowledge.",
    description:
      "The High Priestess embodies the realm of the unseen and unknown. She calls upon intuition, dreams, and inner wisdom to guide one through life's mysteries.",
  },
  {
    name: "The Empress",
    meanings: "Fertility, nurturing, abundance, creativity, motherhood.",
    description:
      "The Empress represents fertility and growth, both physically and metaphorically. She signifies comfort, nurturing energy, and the beauty of nature.",
  },
  {
    name: "The Emperor",
    meanings: "Authority, structure, leadership, stability, power.",
    description:
      "The Emperor embodies leadership and structure. He represents order, control, and the ability to create stability and security.",
  },
  {
    name: "The Hierophant",
    meanings:
      "Tradition, spiritual guidance, institutions, conformity, teaching.",
    description:
      "The Hierophant is a figure of spiritual guidance, often representing formal institutions, beliefs, and traditions. He encourages following the wisdom of established systems.",
  },
  {
    name: "The Lovers",
    meanings: "Love, relationships, harmony, choices, union.",
    description:
      "The Lovers represents love, union, and partnership. It also signals a need to make an important choice, often related to love, relationships, or values.",
  },
  {
    name: "The Chariot",
    meanings: "Determination, willpower, victory, control, ambition.",
    description:
      "The Chariot is about conquering challenges through sheer willpower and determination. It signifies success achieved through control, focus, and perseverance.",
  },
  {
    name: "Strength",
    meanings: "Courage, inner strength, patience, compassion, self-confidence.",
    description:
      "Strength represents the ability to overcome obstacles through gentleness, compassion, and inner fortitude rather than brute force.",
  },
  {
    name: "The Hermit",
    meanings: "Solitude, introspection, wisdom, guidance, inner truth.",
    description:
      "The Hermit represents a time of inner reflection and seeking wisdom. It may suggest a period of solitude to find clarity or enlightenment.",
  },
  {
    name: "Wheel of Fortune",
    meanings: "Change, cycles, fate, destiny, luck, turning point.",
    description:
      "The Wheel of Fortune signifies the cyclical nature of life, where events are constantly changing. It suggests a turning point or a shift in fortune.",
  },
  {
    name: "Justice",
    meanings: "Fairness, truth, accountability, balance, legal matters.",
    description:
      "Justice is about balance and fairness, ensuring that actions have consequences. It often signals a need to look at things from an objective and balanced perspective.",
  },
  {
    name: "The Hanged Man",
    meanings: "Suspension, letting go, perspective, sacrifice, waiting.",
    description:
      "The Hanged Man suggests a period of pause or suspension. It encourages letting go of control and gaining a new perspective, sometimes through sacrifice or waiting.",
  },
  {
    name: "Death",
    meanings: "Transformation, endings, new beginnings, rebirth, change.",
    description:
      "Death symbolizes the end of a phase and the beginning of something new. It’s about transformation and renewal, often indicating a necessary change.",
  },
  {
    name: "Temperance",
    meanings: "Balance, moderation, patience, harmony, self-control.",
    description:
      "Temperance is about finding balance and harmony in life. It suggests patience, moderation, and the blending of opposites to create something greater.",
  },
  {
    name: "The Devil",
    meanings: "Temptation, addiction, materialism, bondage, illusion.",
    description:
      "The Devil represents the shadow side of life, often relating to addictions, unhealthy attachments, or being trapped in negative patterns. It can signal the need to break free from these chains.",
  },
  {
    name: "The Tower",
    meanings: "Sudden change, upheaval, destruction, revelation, liberation.",
    description:
      "The Tower represents a sudden and often disruptive change. It can signify a breakdown of old structures, leading to the revelation of deeper truths and eventual liberation.",
  },
  {
    name: "The Star",
    meanings: "Hope, inspiration, healing, faith, guidance.",
    description:
      "The Star symbolizes hope and healing. It’s a reminder that even after a difficult period, there’s always hope for renewal and a brighter future.",
  },
  {
    name: "The Moon",
    meanings: "Illusion, intuition, the unconscious, dreams, deception.",
    description:
      "The Moon relates to the realm of the subconscious and intuition. It can also indicate confusion, deception, or being misled by appearances.",
  },
  {
    name: "The Sun",
    meanings: "Joy, success, vitality, clarity, positivity.",
    description:
      "The Sun is a symbol of happiness, success, and clarity. It suggests a time of growth, energy, and abundance, where everything is illuminated and clear.",
  },
  {
    name: "Judgment",
    meanings: "Reflection, rebirth, awakening, accountability, decisions.",
    description:
      "Judgment calls for self-reflection and a review of past actions. It can signify a rebirth or awakening, a time for making important life decisions.",
  },
  {
    name: "The World",
    meanings: "Completion, wholeness, achievement, travel, unity.",
    description:
      "The World represents the completion of a cycle or journey, where everything comes full circle. It’s about harmony, achievement, and the successful integration of all parts of the self.",
  },
  {
    name: "Ace of Cups",
    meanings:
      "New beginnings in love or emotions, overflowing joy, spiritual awakening.",
    description:
      "A time for new emotional growth, a fresh start in relationships, or the awakening of intuition and creativity.",
  },
  {
    name: "Two of Cups",
    meanings: "Partnership, harmony, mutual attraction, love.",
    description:
      "Union, a strong bond between two people, whether romantic, platonic, or professional. It represents balanced relationships and deep emotional connection.",
  },
  {
    name: "Three of Cups",
    meanings: "Celebration, friendship, joy, community.",
    description:
      "A card of social gatherings and enjoying time with friends or loved ones. It signifies shared joy and support within a group.",
  },
  {
    name: "Four of Cups",
    meanings: "Contemplation, apathy, dissatisfaction, re-evaluation.",
    description:
      "A time of introspection and emotional discontent. It suggests feeling disconnected or bored, needing to reassess emotions or desires.",
  },
  {
    name: "Five of Cups",
    meanings: "Loss, regret, sorrow, focusing on the negative.",
    description:
      "Feelings of sadness or disappointment, often due to a missed opportunity. However, there is still hope available if one chooses to focus on the positive.",
  },
  {
    name: "Six of Cups",
    meanings: "Nostalgia, childhood memories, innocence, reunions.",
    description:
      "Reflecting on the past with fondness or reconnecting with old friends. It’s a card of returning to simpler times or finding joy in childhood memories.",
  },
  {
    name: "Seven of Cups",
    meanings: "Choices, illusions, confusion, temptation.",
    description:
      "The need to carefully evaluate options and avoid being distracted by illusions or unrealistic dreams. It warns against wishful thinking.",
  },
  {
    name: "Eight of Cups",
    meanings:
      "Leaving behind what no longer serves, emotional withdrawal, moving on.",
    description:
      "A turning point where one chooses to leave behind something emotionally unfulfilling, even though it may be difficult to do so.",
  },
  {
    name: "Nine of Cups",
    meanings:
      "Contentment, emotional fulfillment, wishes granted, satisfaction.",
    description:
      "A card of emotional fulfillment, where desires and wishes are coming to fruition. A time of joy and satisfaction in personal achievements.",
  },
  {
    name: "Ten of Cups",
    meanings: "Happiness, harmony, family, emotional bliss, fulfillment.",
    description:
      "Emotional and familial harmony, contentment, and long-term happiness. A time of peace and positive connections with loved ones.",
  },
  {
    name: "Page of Cups",
    meanings: "Creativity, intuition, curiosity, messages of love.",
    description:
      "A messenger of new emotional experiences or creative ideas. A youthful, open-hearted energy that embraces emotional exploration.",
  },
  {
    name: "Knight of Cups",
    meanings: "Romance, idealism, pursuit of dreams, emotional quests.",
    description:
      "A dreamer, pursuing passions with an emotional drive. Often represents someone who is seeking love or artistic expression with great enthusiasm.",
  },
  {
    name: "Queen of Cups",
    meanings: "Compassion, intuition, nurturing, emotional balance.",
    description:
      "The Queen of Cups is a figure of emotional depth, intuition, and nurturing energy. She encourages connection with the heart and mind in emotional matters.",
  },
  {
    name: "King of Cups",
    meanings: "Emotional mastery, diplomacy, balance, wisdom.",
    description:
      "A leader who has control over their emotions, able to navigate complex emotional situations with empathy and wisdom. A symbol of emotional maturity.",
  },
  {
    name: "Ace of Wands",
    meanings: "New beginnings, inspiration, creative potential, enthusiasm.",
    description:
      "A surge of creative energy or new opportunities. This card represents the spark of inspiration and the start of new ventures.",
  },
  {
    name: "Two of Wands",
    meanings: "Planning, future vision, decisions, exploration.",
    description:
      "Making decisions about future paths or long-term plans. It’s a card of looking outward and considering what’s next in life.",
  },
  {
    name: "Three of Wands",
    meanings: "Expansion, progress, looking ahead, teamwork.",
    description:
      "The early stages of success and expansion. Progress is being made, and now it’s time to look forward and continue working toward larger goals.",
  },
  {
    name: "Four of Wands",
    meanings: "Celebration, stability, home, community, harmony.",
    description:
      "A time of celebration and accomplishment, often related to home or community. This card represents stability and joyful milestones.",
  },
  {
    name: "Five of Wands",
    meanings: "Conflict, competition, struggle, challenges.",
    description:
      "A time of tension or competition. There may be disagreements or challenges that require energy and focus to overcome.",
  },
  {
    name: "Six of Wands",
    meanings: "Victory, recognition, success, public acclaim.",
    description:
      "A card of triumph and recognition. Success is achieved, and one is celebrated for their efforts and accomplishments.",
  },
  {
    name: "Seven of Wands",
    meanings: "Defense, perseverance, standing your ground, challenges.",
    description:
      "Facing opposition but holding firm to your position. It represents perseverance in the face of adversity and maintaining your integrity.",
  },
  {
    name: "Eight of Wands",
    meanings: "Swift action, movement, progress, quick decisions.",
    description:
      "A fast-moving card, indicating swift developments and progress. Things are moving quickly, and decisions need to be made without hesitation.",
  },
  {
    name: "Nine of Wands",
    meanings:
      "Resilience, perseverance, guarding against adversity, endurance.",
    description:
      "Enduring after facing hardships. This card suggests you’re almost at the finish line but need to be vigilant and keep pushing forward.",
  },
  {
    name: "Ten of Wands",
    meanings: "Burden, responsibility, exhaustion, completion.",
    description:
      "Feeling weighed down by responsibilities or burdens. It’s a sign to either lighten the load or seek help to carry the weight.",
  },
  {
    name: "Page of Wands",
    meanings: "Curiosity, exploration, adventure, creative spark.",
    description:
      "A youthful and enthusiastic energy, full of ideas and new ventures. The Page of Wands represents the beginning of a new creative or adventurous path.",
  },
  {
    name: "Knight of Wands",
    meanings: "Passion, action, confidence, adventure, impulsiveness.",
    description:
      "A bold and passionate figure, the Knight of Wands pursues adventures with great energy. This card can also indicate impulsiveness or rushing into things.",
  },
  {
    name: "Queen of Wands",
    meanings: "Confidence, courage, independence, warmth, creativity.",
    description:
      "The Queen of Wands is a confident and charismatic figure, embodying creativity and the ability to inspire others. She is vibrant, enthusiastic, and self-assured.",
  },
  {
    name: "King of Wands",
    meanings: "Leadership, vision, entrepreneurial spirit, determination.",
    description:
      "A visionary leader who takes charge with determination and charisma. The King of Wands inspires others through action and creative leadership.",
  },
  {
    name: "Ace of Swords",
    meanings: "Clarity, new ideas, truth, intellectual breakthrough.",
    description:
      "A powerful card of mental clarity, new ideas, and understanding. It often indicates an important realization or truth emerging.",
  },
  {
    name: "Two of Swords",
    meanings: "Indecision, choices, blocked emotions, difficult decisions.",
    description:
      "A situation requiring a tough decision. It can represent being stuck between two options, unable to move forward.",
  },
  {
    name: "Three of Swords",
    meanings: "Heartbreak, grief, betrayal, emotional pain.",
    description:
      "A card of emotional pain or loss. It often signals heartbreak, separation, or betrayal that cuts deep.",
  },
  {
    name: "Four of Swords",
    meanings: "Rest, recovery, meditation, retreat, contemplation.",
    description:
      "A time to take a break and recover. It’s a period of rest after a challenge or emotional strain, where one regains mental and physical energy.",
  },
  {
    name: "Five of Swords",
    meanings: "Conflict, defeat, betrayal, competition.",
    description:
      "A card indicating tension, conflict, or even betrayal. It suggests someone may feel defeated, or there is a win at the expense of others.",
  },
  {
    name: "Six of Swords",
    meanings: "Transition, moving forward, recovery, travel.",
    description:
      "Moving away from difficulty toward calmer waters. It suggests a mental or emotional transition, often symbolizing healing and moving on.",
  },
  {
    name: "Seven of Swords",
    meanings: "Deception, secrecy, strategy, cunning.",
    description:
      "A card that often points to dishonesty, deceit, or hidden agendas. It can also suggest a need to strategize or act with caution.",
  },
  {
    name: "Eight of Swords",
    meanings: "Restriction, fear, mental entrapment, self-imposed limitations.",
    description:
      "Feeling trapped by your own thoughts or fears. The 8 of Swords highlights mental blockages or feelings of helplessness, but the situation is often not as dire as it seems.",
  },
  {
    name: "Nine of Swords",
    meanings: "Anxiety, nightmares, worry, mental anguish.",
    description:
      "This card represents intense worry or fear, often linked to sleepless nights or obsessive thoughts. It’s a reminder that much of the worry is often imagined.",
  },
  {
    name: "Ten of Swords",
    meanings: "Betrayal, rock bottom, painful endings, defeat.",
    description:
      "A difficult and painful ending, often accompanied by feelings of betrayal. However, it also represents the finality of a situation, and the worst is over.",
  },
  {
    name: "Page of Swords",
    meanings: "Curiosity, intelligence, communication, observation.",
    description:
      "A sharp, curious mind, the Page of Swords is someone who seeks knowledge, answers, and new ideas. It can also represent a new phase of communication or mental exploration.",
  },
  {
    name: "Knight of Swords",
    meanings: "Action, courage, impulsiveness, determination.",
    description:
      "The Knight of Swords is a fast-moving, direct energy. This card represents someone charging forward with determination, often with little regard for potential consequences.",
  },
  {
    name: "Queen of Swords",
    meanings: "Independence, clear thinking, perception, communication.",
    description:
      "The Queen of Swords embodies clear thinking, honesty, and independence. She is logical and perceptive, capable of cutting through illusions to see the truth.",
  },
  {
    name: "King of Swords",
    meanings: "Authority, intellect, truth, fairness, communication.",
    description:
      "A figure of mental authority, the King of Swords represents truth, fairness, and intellectual strength. He leads with logic and clear judgment.",
  },
  {
    name: "Ace of Pentacles",
    meanings: "New opportunities, prosperity, manifestation, abundance.",
    description:
      "A new beginning in the material world, such as a new job, financial opportunity, or business venture. It signals the potential for growth and abundance.",
  },
  {
    name: "Two of Pentacles",
    meanings: "Balance, juggling, adaptability, time management.",
    description:
      "Managing multiple responsibilities or priorities. It suggests finding balance in the physical or material aspects of life, often requiring flexibility.",
  },
  {
    name: "Three of Pentacles",
    meanings: "Collaboration, teamwork, craftsmanship, skill-building.",
    description:
      "Working together with others toward a common goal. This card signifies progress through collaboration, learning, and refining skills.",
  },
  {
    name: "Four of Pentacles",
    meanings: "Stability, security, possessiveness, control.",
    description:
      "Focusing on material security and stability. However, it can also indicate a need to release control or stop holding on too tightly to material possessions or money.",
  },
  {
    name: "Five of Pentacles",
    meanings: "Loss, hardship, insecurity, feeling left out in the cold.",
    description:
      "A time of financial or material struggle. It may indicate a sense of insecurity or feeling excluded, but it also highlights the need to ask for help.",
  },
  {
    name: "Six of Pentacles",
    meanings: "Generosity, balance, charity, give and take.",
    description:
      "A card of generosity and balancing the giving and receiving of resources, whether financial or emotional. It signifies fairness and helping others in need.",
  },
  {
    name: "Seven of Pentacles",
    meanings: "Patience, evaluation, long-term goals, assessment.",
    description:
      "Reflecting on progress and results, this card suggests a need to evaluate whether the effort invested is yielding the expected outcomes. Patience is key here.",
  },
  {
    name: "Eight of Pentacles",
    meanings: "Hard work, craftsmanship, mastery, dedication.",
    description:
      "A focus on honing skills and dedication to hard work. This card represents learning, practice, and commitment to improving one’s craft.",
  },
  {
    name: "Nine of Pentacles",
    meanings: "Abundance, luxury, independence, self-sufficiency.",
    description:
      "A card of material success and enjoying the fruits of one’s labor. It represents independence and satisfaction in the material world.",
  },
  {
    name: "Ten of Pentacles",
    meanings: "Legacy, family, long-term success, financial security.",
    description:
      "A time of financial and familial stability. It signifies generational wealth, family support, and long-term success in material matters.",
  },
  {
    name: "Page of Pentacles",
    meanings: "Ambition, new opportunities, learning, practicality.",
    description:
      "A young, ambitious energy that is focused on practical pursuits. It may signify a new financial opportunity or the beginning of a learning process related to career or finances.",
  },
  {
    name: "Knight of Pentacles",
    meanings: "Diligence, responsibility, hard work, commitment.",
    description:
      "The Knight of Pentacles is dedicated, responsible, and hardworking. This card suggests perseverance, steady progress, and commitment to long-term goals.",
  },
  {
    name: "Queen of Pentacles",
    meanings: "Nurturing, abundance, practicality, financial security.",
    description:
      "The Queen of Pentacles is practical, nurturing, and resourceful. She represents a balance between material success and the care for those around her.",
  },
  {
    name: "King of Pentacles",
    meanings: "Wealth, security, authority, mastery of the material world.",
    description:
      "The King of Pentacles represents someone who has mastered material success and is a symbol of financial security, discipline, and prosperity.",
  },
];

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Here are your 3 cards:</h1>
    <div id="past">Past</div>
    <div id="present">Present</div>
    <div id="future">Future</div>
  </div>
`;

function getRandomInt() {
  return Math.floor(Math.random() * 78);
}

function getRandomCard() {
  return tarotCards[getRandomInt()];
}

let past = getRandomCard();
let present = getRandomCard();
let future = getRandomCard();

document.getElementById("past").innerHTML = `
  <div class="card">
    <h2>PAST</h2>
    <p>Name: ${past.name}<p>
    <p>Meanings: ${past.meanings}<p>
    <p>Description: ${past.description}<p>
  </div>
  `;
document.getElementById("present").innerHTML = `
    <div class="card">
    <h2>PRESENT</h2>
      <p>Name: ${present.name}<p>
      <p>Meanings: ${present.meanings}<p>
      <p>Description: ${present.description}<p>
    </div>
    `;

document.getElementById("future").innerHTML = `
    <div class="card">
    <h2>FUTURE</h2>
      <p>Name: ${future.name}<p>
      <p>Meanings: ${future.meanings}<p>
      <p>Description: ${future.description}<p>
    </div>
    `;
