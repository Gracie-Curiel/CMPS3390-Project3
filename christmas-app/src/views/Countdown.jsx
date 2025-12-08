import { useState, useEffect } from "react";
import santaImg from "./santa.png";

export default function Countdown() {
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);

    if (today > christmas) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }

    const diff = Math.ceil((christmas - today) / (1000 * 60 * 60 * 24));
    setDaysLeft(diff);
  }, []);

    return (
    <div className="w-full flex justify-center mt-6">

        <div className="chat chat-start">

        {/* Bigger Santa avatar */}
        <div className="chat-image avatar">
            <div className="w-80 rounded-full">
            <img src={santaImg} alt="Santa" />
            </div>
        </div>

        {/* Bigger centered chat bubble */}
        <div className="chat-bubble p-5 text-xl max-w-lg leading-relaxed">
            {daysLeft === null ? (
            <>Loading…</>
            ) : (
            <>
                🎅 Ho ho ho!
                <br />
                Christmas is in <strong>{daysLeft}</strong> days!
            </>
            )}
        </div>

        </div>
    </div>
    );

}