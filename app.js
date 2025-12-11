const course = {
  title: "10-Week Wellness Program",
  lessons: [
    {
  "course": {
    "title": "10-Week Wellness Program",
    "description": "Holistic wellness journey covering sleep, nutrition, movement, mindfulness, habits, and long-term wellness planning.",
    "lessons": [
      {
        "id": "week1",
        "title": "Week 1 – Foundations of Wellness",
        "focus": "Awareness & Baseline",
        "link": "https://example.com/week1",
        "modules": [
          {
            "id": "module1",
            "title": "Introduction to Wellness",
            "content": "Explore the foundations of holistic wellness and understand your current habits and baseline health.",
            "interactive": { "type": "reflection", "prompt": "Write down your current daily routines and how you feel physically and mentally." }
          },
          {
            "id": "module2",
            "title": "Coach Notes",
            "content": "Your coach can leave personalized guidance here.",
            "coach_notes": "Placeholder for coach feedback."
          },
          {
            "id": "module3",
            "title": "Goal Setting Exercise",
            "content": "Set 3 achievable wellness goals for the week.",
            "interactive": { "type": "goal_setting", "prompt": "Write down 3 wellness goals for Week 1." }
          },
          {
            "id": "module4",
            "title": "Progress Tracker",
            "content": "Track your daily progress for the week.",
            "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] }
          }
        ]
      },
      {
        "id": "week2",
        "title": "Week 2 – Nutrition Basics & Mindful Eating",
        "focus": "Fueling the Body",
        "link": "https://example.com/week2",
        "modules": [
          { "id": "module1", "title": "Introduction to Nutrition", "content": "Learn the basics of nutrition and mindful eating.", "interactive": { "type": "reflection", "prompt": "Track your meals for 3 days." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set nutrition-related goals for the week.", "interactive": { "type": "goal_setting", "prompt": "Write 3 nutrition goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track daily nutrition habits.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      },
      {
        "id": "week3",
        "title": "Week 3 – Movement & Physical Activity",
        "focus": "Building Energy and Strength",
        "link": "https://example.com/week3",
        "modules": [
          { "id": "module1", "title": "Introduction to Movement", "content": "Explore the importance of physical activity and building strength.", "interactive": { "type": "reflection", "prompt": "List your current physical activities and frequency." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set physical activity goals for the week.", "interactive": { "type": "goal_setting", "prompt": "Write 3 movement goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track daily movement.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      },
      {
        "id": "week4",
        "title": "Week 4 – Sleep and Recovery",
        "focus": "Optimizing Rest",
        "link": "https://example.com/week4",
        "modules": [
          { "id": "module1", "title": "Sleep Basics", "content": "Learn about the importance of sleep and recovery.", "interactive": { "type": "reflection", "prompt": "Track your sleep patterns for 3 nights." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set sleep improvement goals.", "interactive": { "type": "goal_setting", "prompt": "Write 3 sleep-related goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track daily sleep habits.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      },
      {
        "id": "week5",
        "title": "Week 5 – Stress Management & Mindfulness",
        "focus": "Mental & Emotional Well-being",
        "link": "https://example.com/week5",
        "modules": [
          { "id": "module1", "title": "Introduction to Mindfulness", "content": "Learn strategies for stress management and mindfulness.", "interactive": { "type": "reflection", "prompt": "Journal your current stress triggers." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set mindfulness or stress-reduction goals.", "interactive": { "type": "goal_setting", "prompt": "Write 3 stress management goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track mindfulness activities daily.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      },
      {
        "id": "week6",
        "title": "Week 6 – Habit Formation & Behavioral Change",
        "focus": "Building Consistency",
        "link": "https://example.com/week6",
        "modules": [
          { "id": "module1", "title": "Understanding Habits", "content": "Learn how habits are formed and how to implement behavioral change.", "interactive": { "type": "reflection", "prompt": "Identify 1 habit to build and 1 to break." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set habit-related goals.", "interactive": { "type": "goal_setting", "prompt": "Write 3 habit goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track habit progress daily.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      },
      {
        "id": "week7",
        "title": "Week 7 – Advanced Nutrition & Meal Planning",
        "focus": "Sustainable Eating Habits",
        "link": "https://example.com/week7",
        "modules": [
          { "id": "module1", "title": "Advanced Nutrition", "content": "Learn about meal planning and advanced nutrition strategies.", "interactive": { "type": "reflection", "prompt": "Plan your meals for 3 days." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set meal planning goals.", "interactive": { "type": "goal_setting", "prompt": "Write 3 meal planning goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track meal planning daily.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      },
      {
        "id": "week8",
        "title": "Week 8 – Movement Progressions & Functional Fitness",
        "focus": "Strength, Flexibility & Endurance",
        "link": "https://example.com/week8",
        "modules": [
          { "id": "module1", "title": "Functional Fitness", "content": "Learn about movement progressions and functional fitness.", "interactive": { "type": "reflection", "prompt": "Write down your current fitness routine and challenges." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set functional fitness goals.", "interactive": { "type": "goal_setting", "prompt": "Write 3 fitness goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track daily workouts.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      },
      {
        "id": "week9",
        "title": "Week 9 – Emotional Resilience & Mindset",
        "focus": "Coping Strategies & Motivation",
        "link": "https://example.com/week9",
        "modules": [
          { "id": "module1", "title": "Emotional Resilience", "content": "Learn strategies to build emotional resilience and a positive mindset.", "interactive": { "type": "reflection", "prompt": "Identify situations that challenge your mindset." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set mindset and resilience goals.", "interactive": { "type": "goal_setting", "prompt": "Write 3 mindset goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track emotional wellness daily.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      },
      {
        "id": "week10",
        "title": "Week 10 – Wellness Integration & Long-term Planning",
        "focus": "Consolidating Habits & Setting Goals",
        "link": "https://example.com/week10",
        "modules": [
          { "id": "module1", "title": "Integration of Wellness Habits", "content": "Review all previous weeks and integrate habits into a long-term plan.", "interactive": { "type": "reflection", "prompt": "Write a summary of your wellness journey and long-term goals." } },
          { "id": "module2", "title": "Coach Notes", "content": "Coach guidance placeholder.", "coach_notes": "Placeholder for coach feedback." },
          { "id": "module3", "title": "Goal Setting Exercise", "content": "Set long-term wellness goals.", "interactive": { "type": "goal_setting", "prompt": "Write 3 long-term wellness goals." } },
          { "id": "module4", "title": "Progress Tracker", "content": "Track overall progress and reflect on completion.", "tracker": { "type": "daily", "days": 7, "status": ["incomplete","incomplete","incomplete","incomplete","incomplete","incomplete","incomplete"] } }
        ]
      }
    ]
  }
}

  ]
};

const mockQuizzes = {
  week1: [
    {q:"What is wellness?", options:["A state of health","A type of diet","A fitness plan"], a:0},
    {q:"Which is part of holistic wellness?", options:["Mindfulness","Watching TV","Ignoring stress"], a:0},
    {q:"True or False: Wellness only refers to physical health.", options:["True","False"], a:1},
    {q:"Fill in the blank: Wellness is a ____ approach to health.", answer:"holistic"},
    {q:"Which of the following impacts wellness?", options:["Nutrition","Sleep","Both"], a:2},
    {q:"True or False: Stress management is part of wellness.", options:["True","False"], a:0},
    {q:"Fill in the blank: Mindfulness helps with ____.", answer:"awareness"},
    {q:"Which is NOT a wellness domain?", options:["Physical","Emotional","Ignoring nutrition"], a:2},
    {q:"Multiple choice: The baseline of wellness involves assessing ____.", options:["Habits","Skills","Financials"], a:0},
    {q:"True or False: Wellness is a lifelong journey.", options:["True","False"], a:0}
  ],
  week2: [
    {q:"Mindful eating involves:", options:["Eating quickly","Paying attention to food","Skipping meals"], a:1},
    {q:"Good nutrition includes:", options:["Processed foods","Balanced meals","Only fruits"], a:1},
    {q:"True or False: Drinking water is part of nutrition.", options:["True","False"], a:0},
    {q:"Fill in the blank: Macronutrients include ____, proteins, and fats.", answer:"carbohydrates"},
    {q:"Which meal habit is recommended?", options:["Skipping breakfast","Eating slowly","Eating while distracted"], a:1},
    {q:"True or False: Mindful eating can reduce overeating.", options:["True","False"], a:0},
    {q:"Fill in the blank: Nutrition fuels ____.", answer:"energy"},
    {q:"Which is a healthy nutrition tip?", options:["Processed snacks","Balanced meals","Sugary drinks"], a:1},
    {q:"Multiple choice: Nutrient-dense foods are:", options:["Fruits & veggies","Candy","Fast food"], a:0},
    {q:"True or False: Meal planning is part of mindful eating.", options:["True","False"], a:0}
  ],
  week3: [
    {q:"Physical activity improves:", options:["Energy","Mood","Both"], a:2},
    {q:"Daily movement goal:", options:["10 mins","30 mins","60 mins"], a:1},
    {q:"True or False: Strength training is part of movement.", options:["True","False"], a:0},
    {q:"Fill in the blank: Aerobic exercises increase ____.", answer:"endurance"},
    {q:"Which is a benefit of exercise?", options:["Sleep quality","Mood improvement","Both"], a:2},
    {q:"True or False: Stretching reduces injury risk.", options:["True","False"], a:0},
    {q:"Fill in the blank: Consistency in exercise builds ____.", answer:"habit"},
    {q:"Multiple choice: Functional fitness improves:", options:["Strength","Flexibility","Both"], a:2},
    {q:"True or False: Movement has no impact on mental health.", options:["True","False"], a:1},
    {q:"Fill in the blank: Daily movement can increase ____ levels.", answer:"energy"}
  ],
  week4: [
    {q:"Sleep is important for:", options:["Recovery","Stress","Both"], a:2},
    {q:"Recommended sleep hours:", options:["5–6","7–9","10–12"], a:1},
    {q:"True or False: Sleep affects mental health.", options:["True","False"], a:0},
    {q:"Fill in the blank: Deep sleep occurs mostly during ____.", answer:"night"},
    {q:"Which factor disrupts sleep?", options:["Blue light","Dark room","Consistent schedule"], a:0},
    {q:"True or False: Napping can supplement poor sleep.", options:["True","False"], a:0},
    {q:"Fill in the blank: Sleep is essential for ____ consolidation.", answer:"memory"},
    {q:"Multiple choice: Quality sleep impacts:", options:["Mood","Cognition","Both"], a:2},
    {q:"True or False: Adults need at least 6 hours of sleep.", options:["True","False"], a:1},
    {q:"Fill in the blank: Sleep hygiene includes consistent ____.", answer:"routine"}
  ],
  week5: [
    {q:"Mindfulness helps with:", options:["Stress","Sleep","Nutrition"], a:0},
    {q:"Stress management includes:", options:["Meditation","Overworking","Ignoring feelings"], a:0},
    {q:"True or False: Meditation reduces anxiety.", options:["True","False"], a:0},
    {q:"Fill in the blank: Breathing exercises enhance ____ control.", answer:"emotional"},
    {q:"Which is a mindfulness practice?", options:["Journaling","Scrolling social media","Multitasking"], a:0},
    {q:"True or False: Mindfulness improves focus.", options:["True","False"], a:0},
    {q:"Fill in the blank: Gratitude practices support ____.", answer:"resilience"},
    {q:"Multiple choice: Effective stress management includes:", options:["Exercise","Meditation","Both"], a:2},
    {q:"True or False: Ignoring stress reduces it.", options:["True","False"], a:1},
    {q:"Fill in the blank: Mindfulness encourages present ____.", answer:"awareness"}
  ],
  week6: [
    {q:"Habits are formed by:", options:["Consistency","Random acts","Occasional effort"], a:0},
    {q:"Behavioral change is easier with:", options:["Support","Isolation","Neglect"], a:0},
    {q:"True or False: Small habits can compound over time.", options:["True","False"], a:0},
    {q:"Fill in the blank: Repetition leads to ____ formation.", answer:"habit"},
    {q:"Which is a strategy for behavior change?", options:["Environment cues","Random acts","Ignoring triggers"], a:0},
    {q:"True or False: Accountability partners help habit consistency.", options:["True","False"], a:0},
    {q:"Fill in the blank: Breaking habits requires ____ awareness.", answer:"self"},
    {q:"Multiple choice: Consistency improves:", options:["Habit retention","Randomness","Neglect"], a:0},
    {q:"True or False: Habits form overnight.", options:["True","False"], a:1},
    {q:"Fill in the blank: Behavioral change relies on ____ support.", answer:"social"}
  ],
  week7: [
    {q:"Meal planning helps:", options:["Healthy choices","Skipping meals","Fast food"], a:0},
    {q:"Advanced nutrition includes:", options:["Macros","Only calories","Ignoring food quality"], a:0},
    {q:"True or False: Meal prep saves time and improves nutrition.", options:["True","False"], a:0},
    {q:"Fill in the blank: Balanced meals contain carbs, protein, and ____.", answer:"fat"},
    {q:"Which is a nutrition tip?", options:["Processed snacks","Hydration","Sugary drinks"], a:1},
    {q:"True or False: Understanding macros aids healthy eating.", options:["True","False"], a:0},
    {q:"Fill in the blank: Portion control prevents ____.", answer:"overeating"},
    {q:"Multiple choice: Nutrient timing affects:", options:["Energy","Recovery","Both"], a:2},
    {q:"True or False: Skipping breakfast is recommended.", options:["True","False"], a:1},
    {q:"Fill in the blank: Meal planning promotes ____ eating.", answer:"intentional"}
  ],
  week8: [
    {q:"Functional fitness improves:", options:["Strength","Flexibility","Both"], a:2},
    {q:"Progressions prevent:", options:["Injury","Motivation","Both"], a:2},
    {q:"True or False: Movement variety reduces injury risk.", options:["True","False"], a:0},
    {q:"Fill in the blank: Mobility exercises enhance ____.", answer:"flexibility"},
    {q:"Which exercise is functional?", options:["Squat","Bicep curl","None"], a:0},
    {q:"True or False: Endurance training improves stamina.", options:["True","False"], a:0},
    {q:"Fill in the blank: Strength training builds ____.", answer:"muscle"},
    {q:"Multiple choice: Progressions are important for:", options:["Safety","Effectiveness","Both"], a:2},
    {q:"True or False: Overloading too quickly is safe.", options:["True","False"], a:1},
    {q:"Fill in the blank: Consistency improves ____ outcomes.", answer:"fitness"}
  ],
  week9: [
    {q:"Emotional resilience helps with:", options:["Coping","Quitting","Stress"], a:0},
    {q:"Mindset affects:", options:["Motivation","Nutrition","Sleep"], a:0},
    {q:"True or False: Positive mindset improves performance.", options:["True","False"], a:0},
    {q:"Fill in the blank: Resilience involves ____ recovery from setbacks.", answer:"rapid"},
    {q:"Which builds emotional resilience?", options:["Support networks","Isolation","Ignoring stress"], a:0},
    {q:"True or False: Mindset can be trained.", options:["True","False"], a:0},
    {q:"Fill in the blank: Journaling supports emotional ____.", answer:"wellbeing"},
    {q:"Multiple choice: Stress coping strategies include:", options:["Exercise","Meditation","Both"], a:2},
    {q:"True or False: Ignoring problems strengthens resilience.", options:["True","False"], a:1},
    {q:"Fill in the blank: Self-talk influences ____.", answer:"mindset"}
  ],
  week10: [
    {q:"Integration means:", options:["Combining habits","Ignoring progress","Starting over"], a:0},
    {q:"Long-term planning includes:", options:["Goals","Random routines","Avoiding habits"], a:0},
    {q:"True or False: Reviewing past weeks helps integration.", options:["True","False"], a:0},
    {q:"Fill in the blank: Consolidation of habits builds ____ change.", answer:"sustainable"},
    {q:"Which is part of long-term wellness?", options:["Goal setting","Skipping steps","Random actions"], a:0},
    {q:"True or False: Tracking progress is optional.", options:["True","False"], a:1},
    {q:"Fill in the blank: Integration requires ____ reflection.", answer:"self"},
    {q:"Multiple choice: Effective planning includes:", options:["Tracking","Goal setting","Both"], a:2},
    {q:"True or False: Wellness is achieved instantly.", options:["True","False"], a:1},
    {q:"Fill in the blank: Long-term success depends on ____ habits.", answer:"consistent"}
  ]
};


const container = document.getElementById("courseContainer");
const coachToggle = document.querySelector(".coach-toggle");
let coachView = false;

function saveProgress(id, type, value) {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  if (!progress[id]) progress[id] = {};
  progress[id][type] = value;
  localStorage.setItem("progress", JSON.stringify(progress));
}

function getProgress(id, type) {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  return progress[id]?.[type] || null;
}

function createWeek(week) {
  const weekDiv = document.createElement("div");
  weekDiv.className = "week";

  const header = document.createElement("div");
  header.className = "week-header";
  header.innerHTML = `
    <div>
      <div class="week-title">${week.title}</div>
      <div class="week-focus">${week.focus}</div>
      <div class="progress-container"><div class="progress-bar" id="${week.id}-progress"></div></div>
    </div>
    <div>▼</div>
  `;
  weekDiv.appendChild(header);

  const content = document.createElement("div");
  content.className = "lesson-content";
  content.innerHTML = `
    <p>Lesson content placeholder for ${week.title}</p>
    <a href="#" class="lesson-link">Lesson Link Placeholder</a>
    <div class="quiz" id="${week.id}-quiz"></div>
    <div class="coach-notes" id="${week.id}-coach">Coach notes placeholder for ${week.title}</div>
    <button class="btn complete-lesson">Mark Lesson Complete</button>
  `;
  weekDiv.appendChild(content);

  header.addEventListener("click", () => {
    content.style.display = content.style.display === "block" ? "none" : "block";
  });

  container.appendChild(weekDiv);
  updateProgress(week.id);
  loadQuiz(week.id);
}

function updateProgress(id) {
  const progressBar = document.getElementById(`${id}-progress`);
  const lessonCompleted = getProgress(id, "lesson") ? 0.5 : 0;
  const quizCompleted = getProgress(id, "quiz") ? 0.5 : 0;
  progressBar.style.width = ((lessonCompleted + quizCompleted) * 100) + "%";
}

function loadQuiz(weekId) {
  const quizDiv = document.getElementById(`${weekId}-quiz`);
  quizDiv.innerHTML = "";
  const quiz = mockQuizzes[weekId];
  if (!quiz) return;

  quiz.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.className = "quiz-question";
    qDiv.innerHTML = `<strong>Q${i+1}: ${q.q}</strong>`;
    q.options.forEach((opt, idx) => {
      const label = document.createElement("label");
      label.className = "quiz-option";
      label.innerHTML = `<input type="radio" name="${weekId}-q${i}" value="${idx}"> ${opt}`;
      qDiv.appendChild(label);
    });
    quizDiv.appendChild(qDiv);
  });

  const submitBtn = document.createElement("button");
  submitBtn.className = "btn";
  submitBtn.textContent = "Submit Quiz";
  submitBtn.addEventListener("click", () => {
    let score = 0;
    quiz.forEach((q, i) => {
      const selected = document.querySelector(`input[name="${weekId}-q${i}"]:checked`);
      if (selected && parseInt(selected.value) === q.a) score++;
    });
    alert(`You scored ${score} / ${quiz.length}`);
    saveProgress(weekId, "quiz", true);
    updateProgress(weekId);
  });
  quizDiv.appendChild(submitBtn);

  const lessonBtn = quizDiv.parentElement.querySelector(".complete-lesson");
  lessonBtn.addEventListener("click", () => {
    saveProgress(weekId, "lesson", true);
    updateProgress(weekId);
    alert("Lesson marked complete!");
  });
}

course.lessons.forEach(createWeek);

coachToggle.addEventListener("click", () => {
  coachView = !coachView;
  document.querySelectorAll(".coach-notes").forEach(el => {
    el.style.display = coachView ? "block" : "none";
  });
});
