import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: a request for a mental health day meets the most
// corporate response possible — a calendar invite titled "Wellness Check-In"
// with nine attendees. Setup, ironic payoff, one tight sentence.
const JOKE =
  'I asked for a mental health day and got a calendar invite titled "Wellness Check-In" with nine attendees.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
