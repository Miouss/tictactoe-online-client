export function getPasswords(event: React.FormEvent<HTMLFormElement>) {
    return {
      password: event.currentTarget.oldPassword.value,
      newPassword: event.currentTarget.password.value,
    };
  }