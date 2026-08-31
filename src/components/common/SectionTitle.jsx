function SectionTitle({ Title, Button, className = "text-2xl" }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className={`font-bold text-zinc-900 font-IRANSansX ${className}`}>
          {Title}
        </h2>
      </div>

      {Button && (
        <div className="flex items-center gap-3">
          <Button />
        </div>
      )}
    </div>
  );
}

export default SectionTitle;