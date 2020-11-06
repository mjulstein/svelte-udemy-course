export function getFormValues(form) {
  const formData = new FormData(form);
  const data = {};
  for (const pair of formData.entries()) {
    const key = !!pair[0] && pair[0];
    if (!!key) {
      const value = pair[1] || null;
      if (!data[key]) {
        data[key] = value;
      } else {
        const oldVal = data[key];
        data[key] = [...(Array.isArray(oldVal) ? oldVal : [oldVal]), value];
      }
    }
  }
  return data;
}