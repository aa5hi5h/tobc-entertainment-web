export default function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl mb-16">
      <h2 className="tracking-normal text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-foreground/80">{description}</p>
    </div>
  )
}
