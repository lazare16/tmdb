import "../envConfig";

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMBD_CREDENTIAL}`,
    },
  };

  await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options,
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  return <></>;
}
