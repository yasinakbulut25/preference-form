function SectionTitle({ title, subTitle }) {
  if (!title) return;

  return (
    <div className="flex flex-col gap-1 w-full text-center">
      <h2 className="sm:text-4xl text-2xl font-bold text-color-primary">
        {title}
      </h2>
      <p className="sm:text-lg text-sm font-medium text-color-secondary">
        {subTitle}
      </p>
    </div>
  );
}

export default SectionTitle;
