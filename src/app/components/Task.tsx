"use client";

import React, { FormEventHandler, useState } from "react"
import { ITask } from "../../../types/tasks"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../api";



interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ( {task}) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean> (false);
  const [openModalDeleted, setOpenModalDeleted] = useState <boolean> (false);
  const [taskToEdit, setTaskToEdit] = useState <string> (task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setTaskToEdit("");
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  }

  return (
    <tr key={task.id}>
    <td className="w-full">{task.text}</td>
    <td className="flex gap-5">
      <FaEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="helechlapaku text-orange-600" size={20} />
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
      <form onSubmit={handleSubmitEditTodo}>
        <h3 className="font-bold text-lg">Upravit task</h3>
        <div className="modal-action">
          <input value={taskToEdit} onChange={e => setTaskToEdit(e.target.value)} type="text" placeholder="Zde napis neco" className="input input-bordered input-primary w-full" />
        </div>
        <button type="submit" className="btn">
          Potvrdit
        </button>
      </form>
     </Modal>
      <MdDeleteForever onClick={() => setOpenModalDeleted (true)} cursor="pointer" className="text-black-600" size={25} />
      <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
        <h3 className="text-lg text-red-600">Chces ho fakt vymazat ?</h3>
        <div className="modal-action">
          <button
          onClick={() => handleDeleteTask(task.id)}
          className="tady btn text-bd text-green-600"
          >Jasne</button>
        </div>
     </Modal>
    </td>
  </tr>
  )
}

export default Task