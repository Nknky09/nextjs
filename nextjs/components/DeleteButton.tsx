import { deleteUser, removeUser } from "@/app/utils/actions";

function DeleteButton({ id }: { id: string }) {
  const remmoveUserWithId = removeUser.bind(null, id);
  return (
    <form action={remmoveUserWithId}>
      <input type="hidden" name="name" value="shakeAndBake" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
}

export default DeleteButton;
