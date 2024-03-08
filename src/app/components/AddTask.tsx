"use client";

import { FiPlus } from "react-icons/fi";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = 
  async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="main btn btn-dark">
        Pridat
      </button>

     <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <form onSubmit={handleSubmitNewTodo}>
        <h3 className="sem font-bold text-lg">Sem neco napis</h3>
        <div className="modal-action">
          <input value={newTaskValue} onChange={e => setNewTaskValue(e.target.value)} type="text" placeholder="Zde napis neco" className="input input-bordered input-primary w-full" />
        </div>
        <button type="submit" className="btn">
          Odeslat
        </button>
      </form>
     </Modal>
     </div>
  )
}

export default AddTask