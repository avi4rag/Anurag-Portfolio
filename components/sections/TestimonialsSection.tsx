"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

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

export function TestimonialsSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        <SectionReveal>
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Testimonials
            </p>
            <h2
              id="testimonials-heading"
              className="section-heading"
              style={{ color: "var(--text-primary)" }}
            >
              What people say
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <SectionReveal key={t.name} delay={index * 0.08}>
              <TestimonialCard
                name={t.name}
                role={t.role}
                quote={t.quote}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
