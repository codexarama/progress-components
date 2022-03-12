import Select from 'react-select';

const options = [];

for (let n = 10; n <= 100; n += 10) {
  options.push({ value: n, label: n });
}

// console.log(options);

export default function PercentOptions() {
  return (
    <Select
      name="percent_options"
      id="percent_options"
      classNamePrefix="percent_options"
      defaultValue={options[0]}
      options={options}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: 'lightgrey',
          primary: '#262626',
        },
      })}
    />
  );
}
