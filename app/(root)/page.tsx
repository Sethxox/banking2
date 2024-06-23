import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const dashBoard = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home font-slabo">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greetings"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1550.24}
          />
        </header>
        RECENT TRANSCATIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 540.23 }, { currentBalance: 243.1 }]}
      />
    </section>
  );
};

export default dashBoard;
