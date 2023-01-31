function isEmpty(value) {
  return value.trim().length === 0;
}
function isValidEmail(val) {
  return new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  ).test(val);
}
export function isValidFormData(meetup) {
  let valid = {
    title: true,
    subtitle: true,
    imageURL: true,
    address: true,
    description: true,
    contactEmail: true,
  };
  valid.title = !isEmpty(meetup.title);
  valid.subtitle = !isEmpty(meetup.subtitle);
  valid.imageURL = !isEmpty(meetup.imageURL);
  valid.address = !isEmpty(meetup.address);
  valid.description = !isEmpty(meetup.description);
  valid.contactEmail = isValidEmail(meetup.contactEmail);
  return valid;
}
