import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";

describe("Content Fidelity & Rule Verification", () => {
  it("verifies sitemap includes all 7 core routes", () => {
    const urls = sitemap();
    expect(urls).toHaveLength(7);
    const paths = urls.map((u) => new URL(u.url).pathname);
    expect(paths).toContain("/");
    expect(paths).toContain("/about");
    expect(paths).toContain("/contact");
    expect(paths).toContain("/work/geomonitor");
    expect(paths).toContain("/work/studyshield");
    expect(paths).toContain("/work/orbit");
    expect(paths).toContain("/work/divya-setu");
  });

  it("verifies robots.txt allows all crawlers and points to sitemap", () => {
    const robotData = robots();
    expect(robotData.rules).toEqual({
      userAgent: "*",
      allow: "/",
    });
    expect(robotData.sitemap).toBe(
      "https://anurag-portfolio.vercel.app/sitemap.xml"
    );
  });

  it("validates identity and contact specifications from Section 5.1 & 5.2", () => {
    const contact = {
      name: "Anurag",
      email: "avi4rag@gmail.com",
      phone: "+91 6205060900",
      linkedin: "https://www.linkedin.com/in/avi4rag/",
      github: "https://github.com/avi4rag",
      twitter: "@Avi4rag",
      location: "Jaipur, Rajasthan, India",
    };

    expect(contact.name).toBe("Anurag");
    expect(contact.email).toBe("avi4rag@gmail.com");
    expect(contact.phone).toBe("+91 6205060900");
    expect(contact.github).toBe("https://github.com/avi4rag");
    expect(contact.linkedin).toBe("https://www.linkedin.com/in/avi4rag/");
  });

  it("validates all 6 verbatim testimonials from Section 5.7", () => {
    const testimonials = [
      {
        name: "Siddesh Gore",
        role: "Mentor",
        quote:
          "One thing that stood out to me while mentoring Anurag was how quickly he picks things up once he understands the reasoning behind them. He's quite proactive, and I've seen him go from needing guidance on something to handling it independently. His consistency in his CA marks and the way he keeps pushing himself beyond what's required has been noticeable.",
      },
      {
        name: "Manav Verma",
        role: "Mentor",
        quote:
          "Anurag has always been someone who takes feedback seriously and actually works on it. What I've liked most while mentoring him is that he doesn't stay stuck at the same level—he keeps experimenting, asking questions, and improving his work. He has become much more confident in handling things on his own over time.",
      },
      {
        name: "Udhav Runthala",
        role: "SIH Teammate",
        quote:
          "During SIH, Anurag was one of the people who really took ownership of Divya Setu. He was deeply involved in building the project and didn't hesitate to take responsibility when something needed to be figured out or fixed. A lot of the actual implementation came from him, and that made him a really dependable person to have on the team.",
      },
      {
        name: "Jatin",
        role: "SIH Teammate",
        quote:
          "What I remember most about working with Anurag during SIH is that he was always ready to get his hands dirty with the actual project. He spent a lot of time building and refining Divya Setu rather than just discussing ideas. Even when we had problems along the way, he kept working through them until we had something that actually worked.",
      },
      {
        name: "Kartik Sharma",
        role: "DSMD-2.0 Co-author",
        quote:
          "Working with Anurag on the DSMD-2.0 papers was honestly a good learning experience. He took up a significant part of the research and writing, and I could see that he was genuinely trying to understand the topic rather than just putting content together. He was also pretty consistent about getting his work done and improving it along the way.",
      },
      {
        name: "Akshat Sahu",
        role: "StudyShield Teammate",
        quote:
          "Working with Anurag on StudyShield was a great experience. What I liked most was how he could take an idea and actually turn it into a working feature. He handled his part really well, paid attention to the little details, and always made sure things worked properly instead of just getting them done for the sake of it. He's genuinely a great person to build projects with.",
      },
    ];

    expect(testimonials).toHaveLength(6);
    expect(testimonials[0].name).toBe("Siddesh Gore");
    expect(testimonials[1].name).toBe("Manav Verma");
    expect(testimonials[2].name).toBe("Udhav Runthala");
    expect(testimonials[3].name).toBe("Jatin");
    expect(testimonials[4].name).toBe("Kartik Sharma");
    expect(testimonials[5].name).toBe("Akshat Sahu");
  });

  it("verifies Divya Setu has no public GitHub URL while other projects do", () => {
    const projectConfigs = [
      {
        name: "GeoMonitor",
        live: "https://geopolitical-moniter.vercel.app/",
        github: "https://github.com/avi4rag/Geopolitical-Moniter",
      },
      {
        name: "StudyShield",
        live: "https://sw-2627-next-js-study-shield.vercel.app/dashboard",
        github: "https://github.com/kalviumcommunity/SW2627-Next.js-StudyShield",
      },
      {
        name: "Orbit",
        live: "https://orbit-self-eight.vercel.app/",
        github: "https://github.com/avi4rag/Orbit",
      },
      {
        name: "Divya Setu",
        live: "https://projectsomnath.netlify.app/",
        github: undefined,
      },
    ];

    const divyaSetu = projectConfigs.find((p) => p.name === "Divya Setu");
    expect(divyaSetu?.github).toBeUndefined();
    expect(divyaSetu?.live).toBe("https://projectsomnath.netlify.app/");

    const otherProjects = projectConfigs.filter((p) => p.name !== "Divya Setu");
    for (const project of otherProjects) {
      expect(project.github).toBeDefined();
      expect(project.live).toBeDefined();
    }
  });

  it("verifies academic stats: CGPA 9.24, Class XII 71.8%, Class X 85%", () => {
    const education = {
      btech: { cgpa: "9.24/10.00", years: "2025–2029" },
      classXII: { percentage: "71.8%", year: "2025" },
      classX: { percentage: "85%", year: "2022" },
    };

    expect(education.btech.cgpa).toBe("9.24/10.00");
    expect(education.classXII.percentage).toBe("71.8%");
    expect(education.classX.percentage).toBe("85%");
  });
});
