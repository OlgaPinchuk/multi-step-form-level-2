export const ResultList = ({ items, title }) => {
  const ListItem = ({ item }) => {
    const { label, testId, value } = item;
    return (
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-left">{label}</dt>
        <dd
          className="mt-1 text-sm  sm:col-span-2 sm:mt-0"
          data-testid={testId}
        >
          {value}
        </dd>
      </div>
    );
  };

  return (
    <div className="overflow-hidden w-full max-w-lg bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {items.map((item) => (
            <ListItem item={item} key={item.testId} />
          ))}
        </dl>
      </div>
    </div>
  );
};
