function SectionTitle({ Title, Button }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-bold text-zinc-900 text-2xl font-IRANSansX">
          {Title}
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <Button />
      </div>
    </div>
  );
}

export default SectionTitle;