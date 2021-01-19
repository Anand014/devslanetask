export const getUsers = async (page) => {
  const users = await (
    await fetch(`https://randomuser.me/api/?page=${page}&results=12`)
  ).json();
  return users.results;
};

export const getMaleUsers = async (page, gender) => {
  const users = await (
    await fetch(
      `https://randomuser.me/api/?page=${page}&results=12&gender=${gender}`
    )
  ).json();
  return users.results;
};
