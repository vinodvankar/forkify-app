export const getJSON = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${data.messages}(${data.status})`);
    }
    return data;
  } catch (err) {
    throw err;
  }
};
