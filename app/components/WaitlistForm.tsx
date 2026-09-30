"use client";

import { useState, type FormEvent } from "react";

// Demo only: there's no backend, so joining just shows the confirmation.
export function WaitlistForm() {
  const [joined, setJoined] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    setJoined(email);
    e.currentTarget.reset();
  }

  return (
    <>
      <form className="waitlist-form" onSubmit={onSubmit}>
        <label htmlFor="email">Work email</label>
        <div className="waitlist-row">
          <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
          <button type="submit" className="button">Join the waitlist</button>
        </div>
      </form>
      <p className="waitlist-status" role="status">
        {joined && `You're on the waitlist. We'll email ${joined} when a spot opens.`}
      </p>
    </>
  );
}
