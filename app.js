async function fetchRandomUserData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const user = data.results[0];
    const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const email = user.email;

    return { name, email };
  } catch (error) {
    console.error("Error:", error);
  }
}

async function displayUserData() {
  const userData = await fetchRandomUserData();
  if (userData) {
    console.log(`Name: ${userData.name}`);
    console.log(`Email: ${userData.email}`);
  }
}

displayUserData();
