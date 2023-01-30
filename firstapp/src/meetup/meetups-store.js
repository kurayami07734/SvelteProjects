import { writable } from "svelte/store";

function createMeetups() {
  const { subscribe, update } = writable([
    {
      id: "m1",
      title: "Coding Bootcamp",
      subtitle: "Learn to code in few hours",
      description: "Experts will be teaching basic python for all",
      imageURL:
        "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
      contactEmail: "contact@test.com",
      address: "Wayne Manor, 20539 Gotham",
      isFavorite: false,
    },
    {
      id: "m2",
      title: "Swim along",
      subtitle: "For all swimmers",
      description: "Throughout the day",
      imageURL:
        "https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3dpbW1pbmd8ZW58MHx8MHx8",
      contactEmail: "contact@test.com",
      address: "Swimming pool, Wayne Manor, 20539 Gotham",
      isFavorite: false,
    },
  ]);
  return {
    subscribe: subscribe,
    addMeetup: (meetupData) => {
      const meetup = {
        id: Math.random().toString(),
        isFavorite: false,
        ...meetupData,
      };
      update((meetups) => [meetup, ...meetups]);
    },
    toggleFavorite: (id) => {
      update((meetups) => {
        let updatedMeetup = { ...meetups.find((m) => m.id === id) };
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        const idx = meetups.findIndex((m) => m.id === id);
        let updatedMeetups = [...meetups];
        updatedMeetups[idx] = updatedMeetup;
        return updatedMeetups;
      });
    },
  };
}
export const meetups = createMeetups();
