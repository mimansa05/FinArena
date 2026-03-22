import {
  ArrowUpRight,
  BadgeIndianRupee,
  BookOpenCheck,
  CheckCircle2,
  CreditCard,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

const topMetrics = [
  {
    title: "Course Enrollments",
    value: "12,480",
    change: "+18.4% vs last month",
    icon: BookOpenCheck,
  },
  {
    title: "Paid Subscriptions",
    value: "3,268",
    change: "+11.2% active growth",
    icon: CreditCard,
  },
  {
    title: "Total Revenue",
    value: "Rs 9.84L",
    change: "+22.6% collected this quarter",
    icon: BadgeIndianRupee,
  },
  {
    title: "Active Users",
    value: "8,912",
    change: "+9.7% weekly retention",
    icon: Users,
  },
];

const revenueSeries = [
  { month: "Oct", revenue: 3.8, users: 6100 },
  { month: "Nov", revenue: 4.6, users: 6800 },
  { month: "Dec", revenue: 5.4, users: 7200 },
  { month: "Jan", revenue: 6.3, users: 7810 },
  { month: "Feb", revenue: 7.4, users: 8420 },
  { month: "Mar", revenue: 9.8, users: 8912 },
];

const courseDemand = [
  { title: "Budgeting Basics", learners: 3240, fill: 88 },
  { title: "Investing 101", learners: 2860, fill: 76 },
  { title: "Credit Smart", learners: 2145, fill: 59 },
  { title: "Teen Money Habits", learners: 1910, fill: 51 },
];

const subscriptions = [
  { label: "Monthly", value: 1485, share: "45%" },
  { label: "Quarterly", value: 1021, share: "31%" },
  { label: "Yearly", value: 762, share: "24%" },
];

const timeline = [
  {
    title: "Revenue milestone crossed",
    time: "Today, 10:30 AM",
    detail: "Monthly collections crossed Rs 9 lakh after 184 new renewals.",
  },
  {
    title: "New course launched",
    time: "Today, 8:10 AM",
    detail: "Investment Basics for Beginners went live and attracted 240 enrollments.",
  },
  {
    title: "Subscription campaign completed",
    time: "Yesterday, 6:40 PM",
    detail: "Retention emails improved plan upgrades by 13.5% this week.",
  },
  {
    title: "Admin review closed",
    time: "Yesterday, 2:15 PM",
    detail: "Low-performing quiz questions were flagged and sent for content revision.",
  },
];

export default function Dashboard() {
  const maxRevenue = Math.max(...revenueSeries.map((item) => item.revenue));
  const maxUsers = Math.max(...revenueSeries.map((item) => item.users));

  return (
    <main className="page-shell">
      <section className="content-board">
        <div className="grid gap-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">Admin Dashboard</span>
              <h1 className="page-title">Track users, subscriptions, revenue, and platform momentum.</h1>
              <p className="page-copy">
                This overview gives you a quick read on how many learners are taking
                courses, how subscriptions are converting, and how revenue is moving
                across the recent timeline.
              </p>
            </div>

            <aside className="soft-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#9c7fc0]">
                    Admin Snapshot
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#5f2e99]">
                    Platform health is strong.
                  </h2>
                </div>
                <span className="icon-chip">
                  <TrendingUp size={22} />
                </span>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[22px] bg-[linear-gradient(145deg,_rgba(255,255,255,0.84),_rgba(244,232,255,0.84))] p-4">
                  <div className="inline-flex items-center gap-2 text-[#7b3aed]">
                    <ArrowUpRight size={16} />
                    <span className="font-semibold">Best performing area</span>
                  </div>
                  <p className="mt-2 text-[#7d63a1]">
                    Course completions increased after the latest onboarding refresh.
                  </p>
                </div>
                <div className="rounded-[22px] bg-[linear-gradient(145deg,_rgba(255,255,255,0.84),_rgba(244,232,255,0.84))] p-4">
                  <div className="inline-flex items-center gap-2 text-[#7b3aed]">
                    <CheckCircle2 size={16} />
                    <span className="font-semibold">Immediate action</span>
                  </div>
                  <p className="mt-2 text-[#7d63a1]">
                    Push the yearly subscription plan harder. It has the highest retention value.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {topMetrics.map(({ title, value, change, icon: Icon }) => (
              <article key={title} className="soft-card">
                <div className="icon-chip">
                  <Icon size={22} />
                </div>
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[#9c7fc0]">
                  {title}
                </p>
                <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#5f2e99]">
                  {value}
                </h2>
                <p className="mt-3 text-[#7d63a1]">{change}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <article className="soft-card">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#9c7fc0]">
                    Revenue Timeline
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#5f2e99]">
                    Revenue growth across the last 6 months
                  </h2>
                </div>
                <span className="rounded-full bg-[#f2e7ff] px-4 py-2 text-sm font-semibold text-[#7b3aed]">
                  Rs 9.84L current
                </span>
              </div>

              <div className="mt-8 grid grid-cols-6 items-end gap-4">
                {revenueSeries.map((item) => (
                  <div key={item.month} className="flex flex-col items-center gap-3">
                    <div className="flex h-64 w-full items-end justify-center rounded-[26px] bg-[linear-gradient(180deg,_rgba(248,242,255,0.92),_rgba(235,220,255,0.9))] p-3">
                      <div
                        className="w-full rounded-[20px] bg-[linear-gradient(180deg,_#c084fc,_#7c3aed)] shadow-[0_18px_36px_rgba(139,92,246,0.24)]"
                        style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-[#5f2e99]">{item.month}</p>
                      <p className="text-xs text-[#8d73ae]">Rs {item.revenue}L</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="soft-card">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#9c7fc0]">
                Paid Subscription Mix
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#5f2e99]">
                Plan performance
              </h2>

              <div className="mt-6 grid gap-4">
                {subscriptions.map((plan) => (
                  <div
                    key={plan.label}
                    className="rounded-[22px] bg-[linear-gradient(145deg,_rgba(255,255,255,0.84),_rgba(244,232,255,0.84))] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-[#5f2e99]">{plan.label}</p>
                      <span className="text-sm font-semibold text-[#7b3aed]">{plan.share}</span>
                    </div>
                    <div className="mt-3 h-3 rounded-full bg-white/80">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,_#8b5cf6,_#d946ef)]"
                        style={{ width: plan.share }}
                      />
                    </div>
                    <p className="mt-3 text-sm text-[#7d63a1]">{plan.value.toLocaleString()} paid users</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <article className="soft-card">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#9c7fc0]">
                Course Demand
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#5f2e99]">
                Users taking courses right now
              </h2>

              <div className="mt-6 grid gap-4">
                {courseDemand.map((course) => (
                  <div key={course.title}>
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-3">
                        <span className="icon-chip">
                          <UserRound size={18} />
                        </span>
                        <div>
                          <p className="font-semibold text-[#5f2e99]">{course.title}</p>
                          <p className="text-sm text-[#7d63a1]">{course.learners.toLocaleString()} learners</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-[#7b3aed]">{course.fill}%</span>
                    </div>
                    <div className="mt-3 h-3 rounded-full bg-white/80">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,_#c084fc,_#7c3aed)]"
                        style={{ width: `${course.fill}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="soft-card">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#9c7fc0]">
                    Growth Timeline
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#5f2e99]">
                    Revenue and user trend
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {revenueSeries.map((item) => (
                  <div
                    key={item.month}
                    className="rounded-[24px] bg-[linear-gradient(145deg,_rgba(255,255,255,0.84),_rgba(244,232,255,0.84))] p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-[#5f2e99]">{item.month}</p>
                      <p className="text-sm text-[#7b3aed]">{item.users.toLocaleString()} users</p>
                    </div>
                    <div className="mt-3 h-3 rounded-full bg-white/80">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,_#8b5cf6,_#d946ef)]"
                        style={{ width: `${(item.users / maxUsers) * 100}%` }}
                      />
                    </div>
                    <p className="mt-3 text-sm text-[#7d63a1]">
                      Revenue reached Rs {item.revenue}L in {item.month}.
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="soft-card">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#9c7fc0]">
              Admin Activity Timeline
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#5f2e99]">
              Recent platform updates
            </h2>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {timeline.map((entry) => (
                <div
                  key={entry.title}
                  className="rounded-[24px] bg-[linear-gradient(145deg,_rgba(255,255,255,0.84),_rgba(244,232,255,0.84))] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-[#5f2e99]">{entry.title}</p>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9c7fc0]">
                      {entry.time}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-[#7d63a1]">{entry.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
