import { LinkedinIcon } from '@/components/site/brand-icons'
import { Code2, GitCommitHorizontal } from 'lucide-react'

const stats = [
  { icon: Code2, label: '60 Days', value: '60' },
  { icon: Code2, label: 'Daily Build', value: '1×' },
  { icon: GitCommitHorizontal, label: 'GitHub Proof', value: '1×' },
  { icon: LinkedinIcon, label: 'LinkedIn Proof', value: '1×' },
]

export function Stats() {
  return <section className="relative py-8 md:py-12"><div className="mx-auto max-w-6xl px-4"><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{stats.map(s=><div key={s.label} className="glass rounded-2xl p-4 text-center"><div className="mx-auto grid size-9 place-items-center rounded-xl bg-white/5"><s.icon className="size-4 text-accent" /></div><div className="mt-3 text-xl font-bold">{s.value}</div><div className="mt-1 text-[10px] text-muted-foreground">{s.label}</div></div>)}</div></div></section>
}
