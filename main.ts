import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: a request for a mental health day meets the most
// corporate response possible — a calendar invite titled "Wellness Check-In"
// with nine attendees. Setup, ironic payoff, one tight sentence.
//
// The line is assembled from its two named beats — the request and the
// corporate response it gets — so each half can be read (and tweaked) on
// its own before they are joined into the single sentence.
const REQUEST = "I asked for a mental health day";
const RESPONSE =
  'a calendar invite titled "Wellness Check-In" with nine attendees';

function assembleJoke(): string {
  return `${REQUEST} and got ${RESPONSE}.`;
}

const JOKE = assembleJoke();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
