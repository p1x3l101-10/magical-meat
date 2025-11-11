// Stop the advancement spam that happens to new players

ServerEvents.highPriorityData(event => {
  event.addJson('hexical:advancements/root', {
    display: {
      announce_to_chat: false,
      show_toast: false
    }
  });
})