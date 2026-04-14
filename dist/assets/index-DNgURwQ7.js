var A=Object.defineProperty;var k=(e,t,a)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>k(e,typeof t!="symbol"?t+"":t,a);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();class w{constructor(t){c(this,"el");c(this,"phrases");c(this,"typeSpeed");c(this,"eraseSpeed");c(this,"pauseAfter");c(this,"pauseBefore");c(this,"loop");c(this,"currentIndex",0);c(this,"currentText","");c(this,"isTyping",!0);c(this,"timerId",null);c(this,"running",!1);this.el=t.element,this.phrases=t.phrases,this.typeSpeed=t.typeSpeed??65,this.eraseSpeed=t.eraseSpeed??35,this.pauseAfter=t.pauseAfter??1800,this.pauseBefore=t.pauseBefore??400,this.loop=t.loop??!0,t.cursor!==!1&&this.el.classList.add("typewriter-cursor")}start(){return this.running?this:(this.running=!0,this.tick(),this)}stop(){return this.running=!1,this.timerId!==null&&clearTimeout(this.timerId),this}tick(){if(!this.running)return;const t=this.phrases[this.currentIndex];if(this.isTyping)this.currentText.length<t.length?(this.currentText=t.slice(0,this.currentText.length+1),this.render(),this.timerId=setTimeout(()=>this.tick(),this.typeSpeed)):this.timerId=setTimeout(()=>{this.isTyping=!1,this.tick()},this.pauseAfter);else if(this.currentText.length>0)this.currentText=this.currentText.slice(0,-1),this.render(),this.timerId=setTimeout(()=>this.tick(),this.eraseSpeed);else{if(this.currentIndex=(this.currentIndex+1)%this.phrases.length,!this.loop&&this.currentIndex===0){this.running=!1;return}this.isTyping=!0,this.timerId=setTimeout(()=>this.tick(),this.pauseBefore)}}render(){this.el.textContent=this.currentText}}const h=[{label:"Angular",icon:"🅰️",color:"#dd0031"},{label:"React",icon:"⚛️",color:"#61dafb"},{label:"AWS",icon:"☁️",color:"#ff9900"},{label:"Docker",icon:"🐳",color:"#2496ed"},{label:"Python",icon:"🐍",color:"#3776ab"},{label:"Node.js",icon:"🟢",color:"#339933"},{label:"TypeScript",icon:"🔷",color:"#3178c6"},{label:"AI/LLM",icon:"🤖",color:"#10a37f"}];function C(){const e=h.slice(0,4).map((a,s)=>`
        <div class="orbit-icon orbit-inner-icon"
             style="--orbit-delay:${s/4*360}deg; --icon-color:${a.color};"
             aria-label="${a.label}">
          ${a.icon}
        </div>`).join(""),t=h.slice(4).map((a,s)=>`
        <div class="orbit-icon orbit-outer-icon"
             style="--orbit-delay:${s/4*360}deg; --icon-color:${a.color};"
             aria-label="${a.label}">
          ${a.icon}
        </div>`).join("");return`
<section id="hero" aria-label="Hero">

  <!-- Animated mesh background -->
  <div class="hero-mesh" aria-hidden="true">
    <div class="mesh-blob mesh-blob-1"></div>
    <div class="mesh-blob mesh-blob-2"></div>
    <div class="mesh-blob mesh-blob-3"></div>
    <div class="mesh-grid"></div>
  </div>

  <!-- Noise texture -->
  <div class="noise-overlay" aria-hidden="true"></div>

  <!-- Scan line decoration -->
  <div class="scan-line" aria-hidden="true"></div>

  <div class="container hero-container">

    <!-- LEFT — text content -->
    <div class="hero-content">
      <div class="hero-eyebrow reveal">
        <span class="eyebrow-dot"></span>
        <span>Available for new projects</span>
      </div>

      <h1 class="hero-heading reveal delay-100">
        <span class="greeting">Hola, I'm</span><br/>
        <span class="hero-name text-gradient-cyan">Esteban</span>
      </h1>

      <div class="hero-typewriter reveal delay-200" aria-live="polite">
        <span class="tw-prefix">// </span>
        <span id="typewriter-text" class="tw-text"></span>
        <span class="tw-cursor" aria-hidden="true">_</span>
      </div>

      <p class="hero-bio reveal delay-300">
        Full-Stack Developer &amp; AI Engineer from
        <strong>Medellín, Colombia 🇨🇴</strong> — building
        scalable systems where backend reliability meets frontend
        elegance, with AI at the core.
      </p>

      <div class="hero-cta reveal delay-400">
        <a href="#projects" class="btn btn-primary">
          <span>View Projects</span>
          <span>→</span>
        </a>
        <a href="/assets/cv.pdf" class="btn btn-outline" download aria-label="Download CV">
          <span>⬇</span>
          <span>Download CV</span>
        </a>
        <a href="#contact" class="btn btn-ghost">
          <span>Contact Me</span>
        </a>
      </div>

      <!-- Language badges -->
      <div class="hero-langs reveal delay-500">
        <span class="lang-badge">🇨🇴 Spanish — Native</span>
        <span class="lang-badge">🇺🇸 English — B1</span>
      </div>
    </div>

    <!-- RIGHT — avatar with orbit -->
    <div class="hero-visual reveal-right delay-200">
      <div class="avatar-orbit-wrapper">

        <!-- Outer orbit ring decoration -->
        <div class="orbit-ring orbit-ring-outer" aria-hidden="true"></div>
        <div class="orbit-ring orbit-ring-inner" aria-hidden="true"></div>

        <!-- Orbiting tech icons — inner ring -->
        ${e}

        <!-- Orbiting tech icons — outer ring -->
        ${t}

        <!-- Avatar -->
        <div class="avatar-container">
          <img
            src="/assets/avatar.jpg"
            alt="Esteban — Full-Stack & AI Developer"
            class="avatar-img"
            loading="eager"
            onerror="this.src='data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <rect width="200" height="200" fill="#0f0f1a"/>
                <circle cx="100" cy="75" r="40" fill="#1a1a2e"/>
                <circle cx="100" cy="175" r="65" fill="#1a1a2e"/>
                <text x="100" y="85" font-family="monospace" font-size="36" fill="#00f5ff" text-anchor="middle">E</text>
              </svg>
            `)}'"
          />
          <div class="avatar-glow" aria-hidden="true"></div>
        </div>

        <!-- Status badge -->
        <div class="status-badge" aria-label="Open to work">
          <span class="status-dot"></span>
          <span>Open to work</span>
        </div>
      </div>
    </div>

  </div>

  <!-- Scroll indicator -->
  <div class="scroll-indicator reveal" aria-label="Scroll down">
    <span class="scroll-label">Scroll</span>
    <div class="scroll-arrow">
      <span></span><span></span>
    </div>
  </div>

</section>`}function I(){const e=document.getElementById("typewriter-text");e&&new w({element:e,phrases:["Full-Stack Developer","AI Engineer","Cloud Architect","Open Source Enthusiast","LLM Integrations Expert","MCP Builder"],typeSpeed:60,eraseSpeed:30,pauseAfter:2e3,cursor:!1}).start();const t=document.getElementById("navToggle"),a=document.querySelector(".nav-links");t==null||t.addEventListener("click",()=>{const s=a==null?void 0:a.classList.toggle("open");t.classList.toggle("active"),t.setAttribute("aria-expanded",String(s))})}function E(){return`
<section id="about" aria-labelledby="about-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 01. about_me</span>
      <h2 class="section-title" id="about-heading">The Developer Behind the Code</h2>
    </div>

    <div class="about-grid">

      <!-- Left — illustration / photo -->
      <div class="about-visual reveal-left">
        <div class="about-img-wrapper">
          <img
            src="/assets/avatar.jpg"
            alt="Esteban working"
            class="about-img"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <!-- Fallback placeholder -->
          <div class="about-img-placeholder" style="display:none;">
            <div class="placeholder-inner">
              <span class="placeholder-icon">👨‍💻</span>
              <span class="placeholder-text">EST</span>
            </div>
          </div>

          <!-- Floating code badge -->
          <div class="about-code-badge" aria-hidden="true">
            <span class="code-badge-prefix">const</span>
            <span class="code-badge-var"> dev</span>
            <span class="code-badge-op"> = {</span><br/>
            <span class="code-badge-indent">  city: </span>
            <span class="code-badge-str">"Medellín"</span><br/>
            <span class="code-badge-indent">  passion: </span>
            <span class="code-badge-str">"AI + Code"</span><br/>
            <span class="code-badge-op">}</span>
          </div>

          <!-- Years badge -->
          <div class="about-years-badge">
            <span class="years-number">6+</span>
            <span class="years-label">Years Exp.</span>
          </div>
        </div>
      </div>

      <!-- Right — bio text -->
      <div class="about-content reveal-right">

        <p class="about-bio">
          Born and raised in <strong>Medellín, Colombia 🇨🇴</strong>, I started
          writing code as a teenager, driven by curiosity about how the web works.
          What began with simple HTML pages grew into a deep passion for building
          complex, scalable systems that solve real problems.
        </p>

        <p class="about-bio">
          Today I work at the intersection of <strong>full-stack engineering</strong>
          and <strong>artificial intelligence</strong> — designing cloud-native
          architectures on AWS, building AI-powered applications with OpenAI and
          Anthropic Claude, and connecting everything through clean, maintainable code.
        </p>

        <p class="about-bio">
          I believe the best software is born from deep understanding of the problem
          domain, disciplined engineering practices, and a healthy obsession with
          developer experience. When I'm not coding, you'll find me exploring the
          latest LLM research or contributing to open source.
        </p>

        <!-- Divider -->
        <div class="divider"></div>

        <!-- Stats row -->
        <div class="about-stats">
          <div class="about-stat">
            <span class="stat-number text-gradient-cyan">50+</span>
            <span class="stat-label">Projects Shipped</span>
          </div>
          <div class="about-stat">
            <span class="stat-number text-gradient-cyan">6+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="about-stat">
            <span class="stat-number text-gradient-cyan">15+</span>
            <span class="stat-label">AWS Services</span>
          </div>
          <div class="about-stat">
            <span class="stat-number text-gradient-cyan">∞</span>
            <span class="stat-label">Coffee Consumed</span>
          </div>
        </div>

        <!-- Language badges -->
        <div class="about-languages">
          <span class="about-lang-item">
            <span class="lang-flag">🇨🇴</span>
            <span>Spanish — <strong>Native</strong></span>
          </span>
          <span class="about-lang-item">
            <span class="lang-flag">🇺🇸</span>
            <span>English — <strong>B1 Professional</strong></span>
          </span>
        </div>

      </div>
    </div>

    <!-- Fun facts cards -->
    <div class="about-facts" data-stagger>
      <div class="fact-card glass-card reveal" data-stagger-child>
        <span class="fact-icon">⚡</span>
        <h3 class="fact-title">Favorite Stack</h3>
        <p class="fact-desc">NestJS + Angular + AWS + Anthropic Claude for enterprise AI apps</p>
      </div>
      <div class="fact-card glass-card reveal delay-200" data-stagger-child>
        <span class="fact-icon">🧠</span>
        <h3 class="fact-title">Current Obsession</h3>
        <p class="fact-desc">Building MCP servers and agentic workflows with Claude Agent SDK</p>
      </div>
      <div class="fact-card glass-card reveal delay-400" data-stagger-child>
        <span class="fact-icon">🚀</span>
        <h3 class="fact-title">Side Projects</h3>
        <p class="fact-desc">Open-source AI dev tools, RAG systems, and serverless architectures</p>
      </div>
    </div>

  </div>
</section>`}const u=[{name:"Angular",icon:"🅰️",level:5,color:"#dd0031",category:"frontend"},{name:"React",icon:"⚛️",level:5,color:"#61dafb",category:"frontend"},{name:"Astro",icon:"🚀",level:4,color:"#ff5d01",category:"frontend"},{name:"TypeScript",icon:"🔷",level:5,color:"#3178c6",category:"frontend"},{name:"JavaScript",icon:"🟡",level:5,color:"#f7df1e",category:"frontend"},{name:"Vite",icon:"⚡",level:4,color:"#646cff",category:"frontend"},{name:"Next.js",icon:"▲",level:4,color:"#ffffff",category:"frontend"},{name:"Tailwind CSS",icon:"🌊",level:5,color:"#38bdf8",category:"frontend"},{name:"HTML5",icon:"🧱",level:5,color:"#e34f26",category:"frontend"},{name:"CSS3",icon:"🎨",level:5,color:"#1572b6",category:"frontend"},{name:"Node.js",icon:"🟢",level:5,color:"#339933",category:"backend"},{name:"NestJS",icon:"🐈",level:5,color:"#e0234e",category:"backend"},{name:"Python",icon:"🐍",level:4,color:"#3776ab",category:"backend"},{name:"FastAPI",icon:"⚡",level:4,color:"#009688",category:"backend"},{name:"Java",icon:"☕",level:4,color:"#f89820",category:"backend"},{name:"Spring Boot",icon:"🍃",level:4,color:"#6db33f",category:"backend"},{name:"Tomcat",icon:"🐱",level:3,color:"#f8dc75",category:"backend"},{name:"REST APIs",icon:"🔗",level:5,color:"#00f5ff",category:"backend"},{name:"PostgreSQL",icon:"🐘",level:4,color:"#336791",category:"backend"},{name:"MongoDB",icon:"🍃",level:4,color:"#47a248",category:"backend"},{name:"OpenAI API",icon:"🤖",level:5,color:"#10a37f",category:"ai"},{name:"Anthropic Claude",icon:"🧠",level:5,color:"#d4a464",category:"ai"},{name:"LangChain",icon:"🔗",level:4,color:"#1c3c5e",category:"ai"},{name:"MCP Protocol",icon:"🔌",level:5,color:"#8b5cf6",category:"ai"},{name:"LLM Fine-tuning",icon:"🎯",level:3,color:"#ff6b6b",category:"ai"},{name:"Prompt Eng.",icon:"✍️",level:5,color:"#aaff00",category:"ai"},{name:"Vector DBs",icon:"📦",level:4,color:"#9333ea",category:"ai"},{name:"Hugging Face",icon:"🤗",level:3,color:"#ffd21e",category:"ai"},{name:"AI Agents",icon:"🕹️",level:5,color:"#00f5ff",category:"ai"},{name:"RAG Systems",icon:"📚",level:4,color:"#f59e0b",category:"ai"},{name:"AWS EC2",icon:"🖥️",level:5,color:"#ff9900",category:"devops"},{name:"AWS S3",icon:"🗂️",level:5,color:"#ff9900",category:"devops"},{name:"AWS Lambda",icon:"λ",level:5,color:"#ff9900",category:"devops"},{name:"AWS RDS",icon:"🗄️",level:4,color:"#ff9900",category:"devops"},{name:"AWS DynamoDB",icon:"⚡",level:4,color:"#ff9900",category:"devops"},{name:"AWS CloudFront",icon:"🌐",level:4,color:"#ff9900",category:"devops"},{name:"API Gateway",icon:"🚪",level:4,color:"#ff9900",category:"devops"},{name:"AWS ECS",icon:"📦",level:4,color:"#ff9900",category:"devops"},{name:"AWS EKS",icon:"⎈",level:3,color:"#ff9900",category:"devops"},{name:"AWS SNS/SQS",icon:"📨",level:4,color:"#ff9900",category:"devops"},{name:"AWS CloudWatch",icon:"📊",level:4,color:"#ff9900",category:"devops"},{name:"AWS Cognito",icon:"🔐",level:4,color:"#ff9900",category:"devops"},{name:"AWS Bedrock",icon:"🧱",level:4,color:"#ff9900",category:"devops"},{name:"AWS SageMaker",icon:"🔬",level:3,color:"#ff9900",category:"devops"},{name:"AWS IAM",icon:"🛡️",level:5,color:"#ff9900",category:"devops"},{name:"AWS Route 53",icon:"🌍",level:4,color:"#ff9900",category:"devops"},{name:"Azure DevOps",icon:"🔵",level:4,color:"#0078d4",category:"devops"},{name:"Docker",icon:"🐳",level:5,color:"#2496ed",category:"devops"},{name:"Kubernetes",icon:"⎈",level:4,color:"#326ce5",category:"devops"},{name:"GitHub Actions",icon:"⚙️",level:5,color:"#2088ff",category:"devops"},{name:"CI/CD Pipelines",icon:"🔄",level:5,color:"#00f5ff",category:"devops"},{name:"Git",icon:"🌿",level:5,color:"#f05032",category:"tools"},{name:"GitHub",icon:"🐙",level:5,color:"#ffffff",category:"tools"},{name:"GitLab",icon:"🦊",level:4,color:"#fc6d26",category:"tools"},{name:"Jira",icon:"📋",level:5,color:"#0052cc",category:"tools"},{name:"Postman",icon:"📮",level:5,color:"#ff6c37",category:"tools"},{name:"npm / yarn",icon:"📦",level:5,color:"#cb3837",category:"tools"},{name:"VS Code",icon:"💙",level:5,color:"#007acc",category:"tools"},{name:"Linux",icon:"🐧",level:4,color:"#fcc624",category:"tools"}],L=[{name:"Leadership",icon:"🎯",description:"Guide teams with clarity and purpose, turning vision into actionable plans and rallying people around shared goals.",color:"#4f46e5"},{name:"Communication",icon:"💬",description:"Translate complex technical concepts into clear language for stakeholders, clients, and cross-functional teammates.",color:"#7c3aed"},{name:"Teamwork & Collaboration",icon:"🤝",description:"Thrive in cross-functional teams, aligning backend, frontend, design, and business needs with empathy and transparency.",color:"#0891b2"},{name:"Respect & Inclusion",icon:"🌍",description:"Foster a culture where every voice matters — respectful feedback, inclusive practices, and psychological safety.",color:"#059669"},{name:"Problem Solving",icon:"🧩",description:"Break down ambiguous challenges, research root causes deeply, and deliver pragmatic solutions under pressure.",color:"#d97706"},{name:"Adaptability",icon:"⚡",description:"Pivot quickly when requirements shift, embrace new technologies, and stay calm and effective in fast-paced environments.",color:"#dc2626"},{name:"Mentoring",icon:"🌱",description:"Invest in people — share knowledge generously, give constructive code reviews, and help juniors grow with patience.",color:"#059669"},{name:"Critical Thinking",icon:"🔍",description:"Evaluate options rigorously, challenge assumptions respectfully, and make data-driven architectural decisions.",color:"#4f46e5"},{name:"Time Management",icon:"⏱️",description:"Deliver on time consistently by prioritizing ruthlessly, estimating realistically, and communicating blockers early.",color:"#7c3aed"},{name:"Continuous Learning",icon:"📚",description:"Stay ahead of the curve — dedicated to daily learning, open source contribution, and sharing knowledge with the community.",color:"#0891b2"},{name:"Empathy",icon:"❤️",description:"Understand user pain points deeply and advocate for solutions that genuinely improve people's lives and workflows.",color:"#dc2626"},{name:"Ownership",icon:"🛡️",description:"Take full responsibility for deliverables, follow through on commitments, and treat every project as your own.",color:"#d97706"}],$=[{name:"Full-Stack Development",percent:95},{name:"AI/LLM Integration",percent:92},{name:"Cloud Architecture (AWS)",percent:88},{name:"DevOps & CI/CD",percent:85},{name:"System Design",percent:82},{name:"TypeScript / JavaScript",percent:97}];function x(e){const t=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16);return`${t}, ${a}, ${s}`}const D=[{id:"all",label:"All Tech",count:u.length},{id:"frontend",label:"Frontend",count:u.filter(e=>e.category==="frontend").length},{id:"backend",label:"Backend",count:u.filter(e=>e.category==="backend").length},{id:"ai",label:"AI & LLMs",count:u.filter(e=>e.category==="ai").length},{id:"devops",label:"Cloud & DevOps",count:u.filter(e=>e.category==="devops").length},{id:"tools",label:"Tools",count:u.filter(e=>e.category==="tools").length}];function T(e){return Array.from({length:5},(t,a)=>`<span class="level-dot ${a<e?"filled":""}"></span>`).join("")}function P(e){return`
    <div class="skill-card glass-card" data-category="${e.category}"
         style="--skill-color:${e.color};"
         role="listitem" aria-label="${e.name}, level ${e.level} of 5">
      <div class="skill-card-inner">
        <span class="skill-icon" aria-hidden="true">${e.icon}</span>
        <span class="skill-name">${e.name}</span>
        <div class="skill-level" aria-hidden="true">${T(e.level)}</div>
      </div>
      <div class="skill-glow" aria-hidden="true"></div>
    </div>`}function j(){return $.map(e=>`
    <div class="key-skill-row reveal">
      <div class="key-skill-header">
        <span class="key-skill-name">${e.name}</span>
        <span class="key-skill-percent">${e.percent}%</span>
      </div>
      <div class="progress-bar" role="progressbar"
           aria-valuenow="${e.percent}" aria-valuemin="0" aria-valuemax="100"
           aria-label="${e.name}: ${e.percent}%">
        <div class="progress-fill" data-percent="${e.percent}"
             style="transition: width 1.2s cubic-bezier(0.4,0,0.2,1);"></div>
      </div>
    </div>
  `).join("")}function M(){return L.map((e,t)=>`
    <div class="soft-skill-card glass-card"
         style="--soft-color:${e.color}; animation-delay:${t*60}ms;">
      <div class="soft-skill-icon-wrap" aria-hidden="true" style="background: rgba(${x(e.color)}, 0.12);">
        <span class="soft-skill-icon">${e.icon}</span>
      </div>
      <div class="soft-skill-body">
        <h3 class="soft-skill-name">${e.name}</h3>
        <p class="soft-skill-desc">${e.description}</p>
      </div>
    </div>
  `).join("")}function B(){const e=D.map(a=>`
    <button class="skills-tab ${a.id==="all"?"active":""}"
            data-category="${a.id}"
            aria-pressed="${a.id==="all"}">
      ${a.label}
      <span class="tab-count">${a.count}</span>
    </button>
  `).join(""),t=u.map(P).join("");return`
<section id="skills" aria-labelledby="skills-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">02 — skills</span>
      <h2 class="section-title" id="skills-heading">Tools of the Trade</h2>
      <p class="section-subtitle">
        Technologies I work with daily — from frontend elegance to cloud architecture
      </p>
    </div>

    <!-- Filter tabs -->
    <div class="skills-tabs reveal" role="group" aria-label="Skill category filter">
      ${e}
    </div>

    <!-- Tech skills grid -->
    <div class="skills-grid" role="list" id="skills-grid">
      ${t}
    </div>

    <!-- Core competencies progress bars -->
    <div class="key-skills-section">
      <div class="section-header reveal" style="margin-bottom: var(--space-8);">
        <span class="section-label">proficiency</span>
        <h3 class="section-title" style="font-size: var(--fs-2xl);">Core Competencies</h3>
      </div>
      <div class="key-skills-bars">
        ${j()}
      </div>
    </div>

    <!-- ── Soft Skills ──────────────────────────────────── -->
    <div class="soft-skills-section">
      <div class="section-header reveal" style="margin-bottom: var(--space-10);">
        <span class="section-label">beyond the code</span>
        <h3 class="section-title" style="font-size: var(--fs-2xl);">Soft Skills</h3>
        <p class="section-subtitle">
          Great software is built by great people — these are the human qualities I bring to every team
        </p>
      </div>
      <div class="soft-skills-grid" role="list" aria-label="Soft skills">
        ${M()}
      </div>
    </div>

  </div>
</section>`}function W(){const e=document.querySelectorAll(".skills-tab"),t=document.getElementById("skills-grid");t&&e.forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.category;e.forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),a.classList.add("active"),a.setAttribute("aria-pressed","true"),t.querySelectorAll(".skill-card").forEach(n=>{const l=s==="all"||n.dataset.category===s;n.style.display=l?"":"none",l&&(n.style.animation="cardReveal 0.35s ease both",setTimeout(()=>{n.style.animation=""},350))})})})}const b=[{id:"ai-chat-platform",title:"AI Chat Platform",description:"Full-stack conversational AI platform with multi-model routing, memory, and tool use via MCP.",longDescription:"A production-grade AI chat platform that routes between OpenAI GPT-4o, Anthropic Claude, and open-source models. Features persistent memory via vector DB, MCP server integrations, function calling, and a real-time streaming UI built in Angular.",image:"/assets/projects/ai-chat.jpg",tags:["Angular","NestJS","OpenAI","Anthropic","MCP","WebSockets","PostgreSQL","AWS"],category:"ai",github:"https://github.com",demo:"https://demo.example.com",featured:!0,accentColor:"#00f5ff"},{id:"aws-serverless-api",title:"Serverless Microservices on AWS",description:"Event-driven microservices architecture using Lambda, API Gateway, DynamoDB, SQS, and CloudFront.",longDescription:"Designed and deployed a scalable serverless backend on AWS. Includes Lambda functions orchestrated by API Gateway, DynamoDB for NoSQL persistence, SQS for async processing, CloudWatch for observability, and a CloudFront CDN layer with WAF security rules.",image:"/assets/projects/serverless.jpg",tags:["AWS Lambda","API Gateway","DynamoDB","SQS","CloudFront","IAM","CloudWatch","Terraform"],category:"devops",github:"https://github.com",featured:!0,accentColor:"#ff9900"},{id:"ecommerce-platform",title:"E-Commerce Platform",description:"Multi-tenant e-commerce solution with React + NestJS, Stripe payments, and real-time inventory.",longDescription:"Full-stack e-commerce platform featuring React storefront, NestJS backend, Stripe payment processing, real-time stock management with WebSockets, and containerized deployment on AWS ECS with RDS PostgreSQL.",image:"/assets/projects/ecommerce.jpg",tags:["React","NestJS","PostgreSQL","Stripe","Docker","AWS ECS","Redis"],category:"web",github:"https://github.com",demo:"https://demo.example.com",accentColor:"#aaff00"},{id:"realtime-dashboard",title:"Real-Time Analytics Dashboard",description:"Live data dashboard with WebSockets, Chart.js visualizations, and AWS Kinesis data streams.",longDescription:"Enterprise analytics dashboard pulling real-time data from AWS Kinesis streams, processed by Lambda, stored in DynamoDB, and visualized via a React frontend with Chart.js. Features custom alerting via SNS and role-based access through Cognito.",image:"/assets/projects/dashboard.jpg",tags:["React","AWS Kinesis","Lambda","DynamoDB","SNS","Cognito","Chart.js"],category:"web",github:"https://github.com",accentColor:"#8b5cf6"},{id:"rag-knowledge-base",title:"RAG Knowledge Base System",description:"Retrieval-Augmented Generation system with document ingestion, vector search, and Claude as reasoning engine.",longDescription:"Built a company-wide knowledge base using RAG architecture. Documents are chunked, embedded via OpenAI Embeddings, stored in pgvector, and retrieved semantically. Anthropic Claude powers the final answer synthesis with source citations and confidence scoring.",image:"/assets/projects/rag.jpg",tags:["Python","FastAPI","Anthropic Claude","OpenAI Embeddings","pgvector","LangChain","AWS S3"],category:"ai",github:"https://github.com",accentColor:"#d4a464"},{id:"mcp-agent-toolkit",title:"MCP Agent Toolkit",description:"Custom MCP server collection connecting Claude to real-world tools: databases, APIs, and internal services.",longDescription:"Developed a suite of Model Context Protocol servers enabling Claude to interact with PostgreSQL databases, REST APIs, file systems, and internal business tools. Features OAuth authentication, rate limiting, and audit logging for enterprise compliance.",image:"/assets/projects/mcp.jpg",tags:["MCP","TypeScript","Anthropic Claude","Node.js","OAuth","PostgreSQL"],category:"ai",github:"https://github.com",accentColor:"#8b5cf6"},{id:"ai-code-reviewer",title:"AI Code Review Assistant",description:"GitHub bot powered by GPT-4o and Claude that reviews PRs, suggests improvements, and enforces standards.",longDescription:"An automated code review system integrated into GitHub Actions. Uses GPT-4o for bug detection and Claude Sonnet for style/architecture suggestions. Generates structured reports with severity levels, code snippets, and fix suggestions as GitHub PR comments.",image:"/assets/projects/code-review.jpg",tags:["OpenAI GPT-4o","Anthropic Claude","GitHub Actions","Node.js","TypeScript"],category:"ai",github:"https://github.com",accentColor:"#10a37f"},{id:"nestjs-microservices",title:"NestJS Microservices Suite",description:"Production microservices with gRPC transport, CQRS pattern, event sourcing, and distributed tracing.",longDescription:"Enterprise microservices system built with NestJS. Uses gRPC for inter-service communication, Redis for caching, BullMQ for job queues, and OpenTelemetry for distributed tracing. Deployed on Kubernetes (EKS) with Helm charts and automated rollbacks.",image:"/assets/projects/microservices.jpg",tags:["NestJS","gRPC","Redis","BullMQ","Kubernetes","AWS EKS","OpenTelemetry"],category:"api",github:"https://github.com",accentColor:"#e0234e"},{id:"spring-boot-api",title:"Spring Boot Banking API",description:"Secure financial REST API with Spring Boot, JWT auth, audit trails, and AWS RDS for data persistence.",longDescription:"High-security banking API built with Spring Boot 3. Features JWT + refresh token authentication, role-based authorization, request/response audit logging, rate limiting, and full test coverage. Deployed via Azure DevOps CI/CD pipeline to AWS EC2 with RDS PostgreSQL backend.",image:"/assets/projects/banking-api.jpg",tags:["Java","Spring Boot","JWT","AWS EC2","AWS RDS","Azure DevOps","PostgreSQL"],category:"api",github:"https://github.com",accentColor:"#6db33f"}],R=[{id:"all",label:"All Projects"},{id:"ai",label:"AI Projects"},{id:"web",label:"Web Apps"},{id:"api",label:"APIs & Backends"},{id:"devops",label:"Cloud / DevOps"}];function O(e){return`
    <div class="project-featured glass-card reveal" style="--proj-color:${e.accentColor};">
      <div class="featured-inner">
        <div class="featured-image">
          <img src="${e.image}" alt="${e.title}" loading="lazy"
               onerror="this.parentElement.classList.add('img-placeholder')" />
          <div class="featured-category-badge badge badge-cyan">Featured ${e.category.toUpperCase()}</div>
        </div>
        <div class="featured-content">
          <div class="project-tags">
            ${e.tags.slice(0,5).map(t=>`<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <h3 class="featured-title">${e.title}</h3>
          <p class="featured-desc">${e.longDescription}</p>
          <div class="project-links">
            ${e.github?`<a href="${e.github}" target="_blank" rel="noopener" class="btn btn-outline" aria-label="GitHub repo for ${e.title}">GitHub →</a>`:""}
            ${e.demo?`<a href="${e.demo}"   target="_blank" rel="noopener" class="btn btn-primary" aria-label="Live demo for ${e.title}">Live Demo ↗</a>`:""}
          </div>
        </div>
      </div>
    </div>`}function F(e){return`
    <article class="project-card glass-card" data-category="${e.category}"
             style="--proj-color:${e.accentColor};"
             role="listitem">
      <div class="project-card-img">
        <img src="${e.image}" alt="${e.title}" loading="lazy"
             onerror="this.parentElement.classList.add('img-placeholder')" />
        <div class="project-overlay">
          <p class="overlay-desc">${e.longDescription}</p>
          <div class="overlay-links">
            ${e.github?`<a href="${e.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">GitHub</a>`:""}
            ${e.demo?`<a href="${e.demo}"   target="_blank" rel="noopener" class="btn btn-primary btn-sm">Demo ↗</a>`:""}
          </div>
        </div>
      </div>
      <div class="project-card-body">
        <div class="project-category-label">${e.category}</div>
        <h3 class="project-title">${e.title}</h3>
        <p class="project-desc">${e.description}</p>
        <div class="project-tags">
          ${e.tags.slice(0,4).map(t=>`<span class="tech-tag">${t}</span>`).join("")}
          ${e.tags.length>4?`<span class="tech-tag">+${e.tags.length-4}</span>`:""}
        </div>
      </div>
    </article>`}function G(){const e=b.filter(s=>s.featured),t=b.filter(s=>!s.featured),a=R.map(s=>`
    <button class="skills-tab proj-tab ${s.id==="all"?"active":""}"
            data-category="${s.id}"
            aria-pressed="${s.id==="all"}">
      ${s.label}
    </button>
  `).join("");return`
<section id="projects" aria-labelledby="projects-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 03. projects</span>
      <h2 class="section-title" id="projects-heading">Things I've Built</h2>
      <p class="section-subtitle">
        From AI-powered platforms to cloud-native architectures — production-grade work
      </p>
    </div>

    <!-- Featured projects -->
    <div class="featured-projects">
      ${e.map(O).join("")}
    </div>

    <!-- Filter tabs -->
    <div class="skills-tabs proj-tabs reveal" role="group" aria-label="Project category filter">
      ${a}
    </div>

    <!-- Projects grid -->
    <div class="projects-grid" id="projects-grid" role="list">
      ${t.map(F).join("")}
    </div>

  </div>
</section>`}function N(){const e=document.querySelectorAll(".proj-tab"),t=document.getElementById("projects-grid");t&&e.forEach(a=>{a.addEventListener("click",()=>{const s=a.dataset.category;e.forEach(n=>{n.classList.remove("active"),n.setAttribute("aria-pressed","false")}),a.classList.add("active"),a.setAttribute("aria-pressed","true"),t.querySelectorAll(".project-card").forEach(n=>{const l=s==="all"||n.dataset.category===s;n.style.display=l?"":"none",l&&(n.style.animation="cardReveal 0.4s ease both",setTimeout(()=>{n.style.animation=""},400))})})})}const H=[{id:"exp-1",role:"Senior Full-Stack & AI Developer",company:"Tech Startup (NDA)",location:"Medellín, Colombia — Remote",startDate:"Jan 2023",endDate:"Present",type:"full-time",highlights:["Architected and shipped an AI chat platform used by 10k+ daily users, integrating OpenAI GPT-4o and Anthropic Claude via MCP","Led migration of monolithic Node.js app to NestJS microservices on AWS EKS, reducing latency by 40%","Built RAG knowledge base system with LangChain + pgvector, enabling semantic search over 50k+ documents","Designed CI/CD pipelines with GitHub Actions and Azure DevOps; automated deployments cut release time by 70%","Mentored 3 junior developers on TypeScript best practices, clean architecture, and AI-first development"],tags:["NestJS","Angular","OpenAI","Anthropic","MCP","AWS EKS","Docker","CI/CD"],accentColor:"#00f5ff"},{id:"exp-2",role:"Full-Stack Developer",company:"Digital Agency",location:"Medellín, Colombia",startDate:"Mar 2021",endDate:"Dec 2022",type:"full-time",highlights:["Delivered 12+ web applications for enterprise clients using React, Angular, and Spring Boot","Implemented AWS infrastructure (EC2, S3, CloudFront, RDS) for high-traffic e-commerce platforms","Built RESTful and GraphQL APIs with NestJS and FastAPI, integrated with third-party services","Introduced Docker-based dev environments that reduced onboarding time from 2 days to 2 hours","Integrated Stripe, PayU, and custom payment gateways for Colombian fintech clients"],tags:["React","Angular","Spring Boot","AWS","Docker","PostgreSQL","GraphQL"],accentColor:"#aaff00"},{id:"exp-3",role:"Backend Developer",company:"Financial Services Co.",location:"Medellín, Colombia",startDate:"Jun 2019",endDate:"Feb 2021",type:"full-time",highlights:["Developed secure banking APIs with Java Spring Boot, processing 500k+ daily transactions","Designed database schemas and query optimization strategies reducing report generation time by 65%","Implemented OAuth 2.0 / JWT authentication and role-based access control for 200k+ users","Deployed applications on AWS EC2 with RDS and established Tomcat-based production environments","Collaborated with Agile/Scrum teams using Jira, delivering 2-week sprint cycles consistently"],tags:["Java","Spring Boot","PostgreSQL","Oracle DB","AWS EC2","Tomcat","JWT"],accentColor:"#8b5cf6"},{id:"exp-4",role:"Junior Web Developer",company:"Freelance / Remote",location:"Medellín, Colombia",startDate:"Jan 2018",endDate:"May 2019",type:"freelance",highlights:["Built 20+ websites and web apps for local SMEs using JavaScript, HTML5, CSS3, and Node.js","Developed custom WordPress and headless CMS solutions with React frontends","Created REST APIs with Express.js and integrated third-party services (WhatsApp, email, analytics)","Maintained ongoing client relationships with rapid turnaround on feature requests"],tags:["JavaScript","Node.js","React","CSS3","WordPress","MySQL"],accentColor:"#ff6b35"}];function q(e,t){const a=e.highlights.map(n=>`<li class="timeline-highlight"><span>▸</span> ${n}</li>`).join(""),s=e.tags.map(n=>`<span class="tech-tag">${n}</span>`).join("");return`
    <div class="timeline-item timeline-${t%2===0?"left":"right"} reveal ${t%2===0?"":"reveal-right"}"
         style="--entry-color:${e.accentColor};">

      <!-- Dot on the line -->
      <div class="timeline-dot" aria-hidden="true">
        <span class="dot-inner"></span>
      </div>

      <!-- Card -->
      <article class="timeline-card glass-card">
        <div class="timeline-header">
          <div class="timeline-role-group">
            <h3 class="timeline-role">${e.role}</h3>
            <div class="timeline-company">
              <span class="company-name">${e.company}</span>
              <span class="company-location">📍 ${e.location}</span>
            </div>
          </div>
          <div class="timeline-meta">
            <span class="timeline-dates">
              ${e.startDate} — ${e.endDate}
            </span>
            <span class="timeline-type badge ${e.endDate==="Present"?"badge-lime":"badge-cyan"}">
              ${e.type}
            </span>
          </div>
        </div>

        <ul class="timeline-highlights" role="list">
          ${a}
        </ul>

        <div class="timeline-tags">
          ${s}
        </div>
      </article>
    </div>`}function J(){return`
<section id="experience" aria-labelledby="experience-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 04. experience</span>
      <h2 class="section-title" id="experience-heading">Where I've Worked</h2>
      <p class="section-subtitle">
        6+ years of shipping production code across agencies, startups, and enterprise
      </p>
    </div>

    <div class="timeline" role="list">
      <!-- Vertical line -->
      <div class="timeline-line" aria-hidden="true"></div>

      ${H.map((e,t)=>q(e,t)).join("")}
    </div>

  </div>
</section>`}const Q=[{delay:0,type:"prompt",text:"$ mcp connect --server filesystem --server postgres"},{delay:600,type:"output",text:'✓ MCP server "filesystem" connected'},{delay:900,type:"output",text:'✓ MCP server "postgres" connected'},{delay:1300,type:"blank",text:""},{delay:1500,type:"prompt",text:"$ claude chat --model claude-opus-4-6"},{delay:2100,type:"ai",text:"Claude: How can I assist you today?"},{delay:2500,type:"user",text:"User:   Query the users table and summarize trends."},{delay:3200,type:"output",text:"[Tool] postgres: SELECT * FROM users LIMIT 1000;"},{delay:4e3,type:"ai",text:"Claude: Analyzed 1,000 records. Top trend: 40% YoY"},{delay:4500,type:"ai",text:"        growth in API integrations since Q3 2024."},{delay:5200,type:"blank",text:""},{delay:5400,type:"prompt",text:"$ openai chat --model gpt-4o --stream"},{delay:6e3,type:"output",text:"Streaming response... ▊"}],z=[{icon:"🤖",title:"OpenAI Integration",color:"#10a37f",desc:"GPT-4o, GPT-4 Vision, Whisper, DALL-E 3, Embeddings API — production-grade integrations with streaming, function calling, and structured outputs.",tags:["GPT-4o","Embeddings","Function Calling","Streaming"]},{icon:"🧠",title:"Anthropic Claude",color:"#d4a464",desc:"Claude Opus, Sonnet, and Haiku via Claude API and Claude Agent SDK. Extended thinking, computer use, MCP tools, and multi-turn agentic workflows.",tags:["Claude Opus","Agent SDK","MCP","Tool Use"]},{icon:"🔌",title:"MCP Servers",color:"#8b5cf6",desc:"Built and deployed custom Model Context Protocol servers connecting Claude to databases, REST APIs, file systems, and internal business services.",tags:["MCP Protocol","TypeScript","OAuth","Resources"]},{icon:"📚",title:"RAG & Vector Search",color:"#f59e0b",desc:"End-to-end RAG pipelines: document ingestion, chunking, embedding, pgvector/Pinecone storage, and semantic retrieval with re-ranking.",tags:["LangChain","pgvector","Pinecone","Re-ranking"]},{icon:"🕹️",title:"AI Agents",color:"#00f5ff",desc:"Multi-agent orchestration systems with tool use, memory, planning, and human-in-the-loop checkpoints for complex automation workflows.",tags:["LangGraph","AutoGen","Claude SDK","Memory"]},{icon:"🔬",title:"AWS Bedrock & SageMaker",color:"#ff9900",desc:"Deployed fine-tuned models and managed LLM endpoints on AWS Bedrock. Custom training pipelines on SageMaker for domain-specific models.",tags:["Bedrock","SageMaker","Fine-tuning","Inference"]}];function _(){return`
    <div class="terminal-widget glass-card" aria-label="Code terminal demo" role="img">
      <div class="terminal-header">
        <div class="term-dots">
          <span class="term-dot red"></span>
          <span class="term-dot yellow"></span>
          <span class="term-dot green"></span>
        </div>
        <span class="term-title">claude-mcp-session</span>
        <span class="term-badge">LIVE</span>
      </div>
      <div class="terminal-body" id="terminal-body">
        ${Q.map(t=>`
    <div class="term-line term-${t.type}" style="--line-delay:${t.delay}ms;" aria-hidden="true">
      ${t.text}
    </div>
  `).join("")}
      </div>
    </div>`}function K(e){return`
    <div class="ai-card glass-card reveal" style="--card-accent:${e.color};">
      <div class="ai-card-icon" aria-hidden="true" style="color:${e.color}; text-shadow: 0 0 20px ${e.color}40;">
        ${e.icon}
      </div>
      <h3 class="ai-card-title">${e.title}</h3>
      <p class="ai-card-desc">${e.desc}</p>
      <div class="ai-card-tags">
        ${e.tags.map(t=>`<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>`}function Y(){return`
<section id="ai-showcase" aria-labelledby="ai-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 05. ai_engineering</span>
      <h2 class="section-title" id="ai-heading">AI at the Core</h2>
      <p class="section-subtitle">
        Building the next generation of software with LLMs, agents, and MCP integrations
      </p>
    </div>

    <!-- Terminal + intro split -->
    <div class="ai-hero-split">

      <div class="ai-terminal-col reveal-left">
        ${_()}
      </div>

      <div class="ai-intro-col reveal-right">
        <div class="ai-headline">
          <h3 class="ai-headline-text">
            Connecting AI to the<br/>
            <span class="text-gradient-lime">Real World</span>
          </h3>
        </div>
        <p class="ai-intro-text">
          I specialize in building production AI systems that go beyond simple chat —
          connecting large language models to live data sources, APIs, and internal
          tools through the <strong>Model Context Protocol (MCP)</strong>.
        </p>
        <p class="ai-intro-text">
          My work spans from rapid prompt engineering and fine-tuning to architecting
          multi-agent pipelines that handle complex, real-world business workflows with
          full observability and safety guardrails.
        </p>

        <!-- LLM logos strip -->
        <div class="llm-strip">
          <div class="llm-item" style="--llm-color:#10a37f">
            <span class="llm-icon">🤖</span>
            <span class="llm-label">OpenAI</span>
          </div>
          <div class="llm-item" style="--llm-color:#d4a464">
            <span class="llm-icon">🧠</span>
            <span class="llm-label">Anthropic</span>
          </div>
          <div class="llm-item" style="--llm-color:#326ce5">
            <span class="llm-icon">🦜</span>
            <span class="llm-label">LangChain</span>
          </div>
          <div class="llm-item" style="--llm-color:#ff9900">
            <span class="llm-icon">☁️</span>
            <span class="llm-label">Bedrock</span>
          </div>
          <div class="llm-item" style="--llm-color:#8b5cf6">
            <span class="llm-icon">🔌</span>
            <span class="llm-label">MCP</span>
          </div>
          <div class="llm-item" style="--llm-color:#ffd21e">
            <span class="llm-icon">🤗</span>
            <span class="llm-label">HuggingFace</span>
          </div>
        </div>
      </div>
    </div>

    <!-- AI cards grid -->
    <div class="ai-cards-grid">
      ${z.map(K).join("")}
    </div>

  </div>
</section>`}function V(){const e=document.querySelector(".terminal-widget");if(!e)return;const t=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(e.classList.add("terminal-animate"),t.unobserve(s.target))})},{threshold:.4});t.observe(e)}function U(){return`
<section id="contact" aria-labelledby="contact-heading">
  <div class="container">

    <div class="section-header reveal">
      <span class="section-label">// 06. contact</span>
      <h2 class="section-title" id="contact-heading">Let's Build Something</h2>
      <p class="section-subtitle">
        Open to freelance projects, full-time roles, and AI consulting
      </p>
    </div>

    <div class="contact-grid">

      <!-- Left — info -->
      <div class="contact-info reveal-left">

        <div class="contact-availability">
          <span class="avail-dot"></span>
          <span class="avail-text">Available for new opportunities</span>
        </div>

        <h3 class="contact-tagline">
          Got a project in mind?<br/>
          <span class="text-gradient-cyan">I'd love to hear about it.</span>
        </h3>

        <p class="contact-desc">
          Whether you're building an AI product, need cloud architecture help,
          or want a full-stack developer to join your team — let's talk.
        </p>

        <div class="contact-channels">

          <a href="mailto:esteban@example.com" class="contact-channel" aria-label="Send email">
            <span class="channel-icon">✉️</span>
            <div class="channel-info">
              <span class="channel-label">Email</span>
              <span class="channel-value">esteban@example.com</span>
            </div>
          </a>

          <a href="https://wa.me/573001234567" target="_blank" rel="noopener" class="contact-channel" aria-label="WhatsApp">
            <span class="channel-icon">💬</span>
            <div class="channel-info">
              <span class="channel-label">WhatsApp</span>
              <span class="channel-value">+57 300 123 4567</span>
            </div>
          </a>

          <a href="https://linkedin.com/in/esteban" target="_blank" rel="noopener" class="contact-channel" aria-label="LinkedIn">
            <span class="channel-icon">💼</span>
            <div class="channel-info">
              <span class="channel-label">LinkedIn</span>
              <span class="channel-value">linkedin.com/in/esteban</span>
            </div>
          </a>

          <a href="https://github.com/esteban" target="_blank" rel="noopener" class="contact-channel" aria-label="GitHub">
            <span class="channel-icon">🐙</span>
            <div class="channel-info">
              <span class="channel-label">GitHub</span>
              <span class="channel-value">github.com/esteban</span>
            </div>
          </a>

        </div>

        <!-- Location pin -->
        <div class="contact-location glass-card">
          <span class="location-pin">📍</span>
          <div>
            <div class="location-city">Medellín, Colombia 🇨🇴</div>
            <div class="location-tz">UTC-5 · Open to remote worldwide</div>
          </div>
        </div>

      </div>

      <!-- Right — form -->
      <div class="contact-form-col reveal-right">
        <form class="contact-form glass-card" id="contactForm" novalidate aria-label="Contact form">

          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-input"
              placeholder="Your name"
              required
              autocomplete="name"
              aria-required="true"
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-input"
              placeholder="your@email.com"
              required
              autocomplete="email"
              aria-required="true"
            />
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="form-input"
              placeholder="Project idea, collaboration, etc."
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              class="form-input form-textarea"
              placeholder="Tell me about your project..."
              rows="5"
              required
              aria-required="true"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary form-submit" id="submitBtn">
            <span id="submitText">Send Message →</span>
            <span id="submitLoading" style="display:none;">Sending...</span>
          </button>

          <p id="formStatus" class="form-status" role="alert" aria-live="polite"></p>

        </form>
      </div>

    </div>
  </div>
</section>`}function X(){const e=document.getElementById("contactForm");if(!e)return;e.addEventListener("submit",async a=>{a.preventDefault();const s=document.getElementById("submitBtn"),i=document.getElementById("submitText"),n=document.getElementById("submitLoading"),l=document.getElementById("formStatus");s.disabled=!0,i.style.display="none",n.style.display="inline",await new Promise(p=>setTimeout(p,1500)),i.style.display="inline",n.style.display="none",s.disabled=!1,l.textContent="✓ Message sent! I'll get back to you soon.",l.className="form-status success",e.reset(),setTimeout(()=>{l.textContent="",l.className="form-status"},5e3)}),e.querySelectorAll(".form-input").forEach(a=>{a.addEventListener("focus",()=>{var s;return(s=a.parentElement)==null?void 0:s.classList.add("focused")}),a.addEventListener("blur",()=>{var s;a.value||(s=a.parentElement)==null||s.classList.remove("focused")})})}const Z=`
 ███████╗███████╗████████╗
 ██╔════╝██╔════╝╚══██╔══╝
 █████╗  ███████╗   ██║
 ██╔══╝  ╚════██║   ██║
 ███████╗███████║   ██║
 ╚══════╝╚══════╝   ╚═╝
`.trim();function ee(){const e=new Date().getFullYear();return`
<footer id="footer" role="contentinfo">
  <div class="container footer-container">

    <!-- Top row -->
    <div class="footer-top">

      <!-- ASCII logo -->
      <div class="footer-brand">
        <pre class="ascii-logo" aria-label="EST logo">${Z}</pre>
        <p class="footer-tagline">
          Full-Stack Developer &amp; AI Engineer<br/>
          <span class="text-cyan">Medellín, Colombia 🇨🇴</span>
        </p>
      </div>

      <!-- Quick nav -->
      <nav class="footer-nav" aria-label="Footer navigation">
        <span class="footer-nav-title">Navigate</span>
        <ul role="list">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#ai-showcase">AI</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <!-- Social links -->
      <div class="footer-social">
        <span class="footer-nav-title">Connect</span>
        <div class="social-links">
          <a href="https://github.com/esteban" target="_blank" rel="noopener"
             class="social-link" aria-label="GitHub profile">
            <span class="social-icon">🐙</span>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/esteban" target="_blank" rel="noopener"
             class="social-link" aria-label="LinkedIn profile">
            <span class="social-icon">💼</span>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:esteban@example.com"
             class="social-link" aria-label="Email">
            <span class="social-icon">✉️</span>
            <span>Email</span>
          </a>
          <a href="https://wa.me/573001234567" target="_blank" rel="noopener"
             class="social-link" aria-label="WhatsApp">
            <span class="social-icon">💬</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Divider line -->
    <div class="footer-divider" aria-hidden="true"></div>

    <!-- Bottom row -->
    <div class="footer-bottom">
      <p class="footer-credit">
        Built with
        <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a> +
        <a href="https://typescriptlang.org" target="_blank" rel="noopener">TypeScript</a>
        + ❤️ from Medellín
      </p>
      <p class="footer-copy">
        <span class="text-dim">// </span>
        &copy; ${e} Esteban. All rights reserved.
      </p>
      <button class="back-to-top" id="backToTop" aria-label="Back to top">
        ↑ Top
      </button>
    </div>

  </div>
</footer>`}function te(){const e=document.getElementById("backToTop");e==null||e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}function ae(){const e=document.getElementById("cursor"),t=document.getElementById("cursor-dot");if(!e||!t)return;if(window.matchMedia("(pointer: coarse)").matches){e.style.display="none",t.style.display="none";return}let a=0,s=0,i=0,n=0,l;document.addEventListener("mousemove",o=>{a=o.clientX,s=o.clientY,t.style.left=`${a}px`,t.style.top=`${s}px`});function p(){i+=(a-i)*.12,n+=(s-n)*.12,e.style.left=`${i}px`,e.style.top=`${n}px`,l=requestAnimationFrame(p)}l=requestAnimationFrame(p);const d="a, button, [data-cursor-hover], input, textarea, .glass-card, .skill-card, .project-card";document.addEventListener("mouseover",o=>{o.target.closest(d)&&(e.classList.add("cursor-hover"),t.classList.add("cursor-dot-hover"))}),document.addEventListener("mouseout",o=>{o.target.closest(d)&&(e.classList.remove("cursor-hover"),t.classList.remove("cursor-dot-hover"))}),document.addEventListener("mouseleave",()=>{e.style.opacity="0",t.style.opacity="0"}),document.addEventListener("mouseenter",()=>{e.style.opacity="1",t.style.opacity="1"}),window.addEventListener("beforeunload",()=>{cancelAnimationFrame(l)})}function se(){const e=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&(r.target.classList.add("visible"),e.unobserve(r.target))})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(o=>e.observe(o));const a=new IntersectionObserver(o=>{o.forEach(r=>{if(r.isIntersecting){const m=r.target,g=m.dataset.percent??"0";m.style.width=`${g}%`,a.unobserve(m)}})},{threshold:.3});document.querySelectorAll(".progress-fill").forEach(o=>a.observe(o));const s=document.querySelectorAll("section[id]"),i=document.querySelectorAll(".nav-link"),n=new IntersectionObserver(o=>{o.forEach(r=>{if(r.isIntersecting){const m=r.target.getAttribute("id");i.forEach(g=>{g.classList.toggle("active",g.getAttribute("href")===`#${m}`)})}})},{threshold:.35,rootMargin:"-80px 0px -40% 0px"});s.forEach(o=>n.observe(o));const l=document.getElementById("navbar");if(l){let o=!1;const r=()=>{o||(window.requestAnimationFrame(()=>{l.classList.toggle("scrolled",window.scrollY>60),o=!1}),o=!0)};window.addEventListener("scroll",r,{passive:!0})}const p=document.querySelectorAll("[data-stagger]"),d=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&(r.target.querySelectorAll("[data-stagger-child]").forEach((g,S)=>{g.style.transitionDelay=`${S*80}ms`,g.classList.add("visible")}),d.unobserve(r.target))})},{threshold:.1});p.forEach(o=>d.observe(o))}function ne(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{var i;t.preventDefault();const a=e.getAttribute("href");if(!a)return;const s=document.querySelector(a);if(s){const n=((i=document.getElementById("navbar"))==null?void 0:i.offsetHeight)??70,l=s.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:l,behavior:"smooth"});const p=document.querySelector(".nav-links"),d=document.getElementById("navToggle");p==null||p.classList.remove("open"),d==null||d.classList.remove("active"),d==null||d.setAttribute("aria-expanded","false")}})})}function ie(){const e=localStorage.getItem("theme");return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function v(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)}function oe(){const t=(document.documentElement.getAttribute("data-theme")??"light")==="dark"?"light":"dark";return v(t),t}function le(){v(ie());const e=document.getElementById("themeToggle");e&&(e.addEventListener("click",()=>{const t=oe();e.style.transform="rotate(360deg) scale(1.15)",setTimeout(()=>{e.style.transform=""},350),e.setAttribute("aria-label",`Switch to ${t==="dark"?"light":"dark"} mode`)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{localStorage.getItem("theme")||v(t.matches?"dark":"light")}))}const f=document.getElementById("app");if(!f)throw new Error("#app element not found");f.innerHTML=[C(),E(),B(),G(),J(),Y(),U(),ee()].join(`
`);document.addEventListener("DOMContentLoaded",y);document.readyState!=="loading"&&y();function y(){le(),ae(),se(),ne(),I(),W(),N(),V(),X(),te()}
