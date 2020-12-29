export type TGetCandidates = {
  Image: string;
  name: string;
  id: string;
};

export function getCandidates() {
  return fetch('https://letsplayitapp.herokuapp.com/')
    .then((res) => res.json())
    .then((result) => result)
    .catch((err) => err);
}
