# The Grill (Real-Time Debate App)

**The Grill** is a real-time debate platform where users enter a "Kitchen" (chat room), pick a side, and roast each other while spectators vote on who is winning. Built for [Hack Club Flavortown](https://flavortown.hackclub.com).

![Project Status](https://img.shields.io/badge/Status-Building...-orange?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Next.js_16_+_Supabase-blue?style=for-the-badge)

## What's Cooking?

Current Features:
- [x] **Supabase Connection:** Live database connection established.
- [x] **Real-Time Messaging:** Messages persist instantly to the cloud.
- [x] **Secure Architecture:** Built with Next.js 14 App Router & TypeScript.
- [ ] **Multiplayer Rooms:** (Coming Soon) Dynamic debate rooms.
- [ ] **Spectator Voting:** (Coming Soon) Live "Heat Meter" for debates.

## The Recipe (Tech Stack)

*   **Frontend:** [Next.js 16](https://nextjs.org/) (React, App Router, TypeScript)
*   **Backend & Database:** [Supabase](https://supabase.com/) (PostgreSQL)
*   **Styling:** Tailwind CSS
*   **Deployment:** Vercel (Planned)

## How to Run Locally

1.  **Clone the Kitchen:**
    ```bash
    git clone https://github.com/your-username/the-grill.git
    cd the-grill
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your Supabase keys:
    ```bash
    NEXT_PUBLIC_SUPABASE_URL=your_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    ```

4.  **Start the Oven:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to see the app.

## Contributing

This is a **Hack Club Flavortown** project!
1.  Fork it.
2.  Create your feature branch (`git checkout -b feature/spicy-feature`).
3.  Commit your changes (`git commit -m 'Add some spice'`).
4.  Push to the branch (`git push origin feature/spicy-feature`).
5.  Open a Pull Request.

---
