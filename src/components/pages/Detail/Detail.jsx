import React, { useState } from "react";
import Layout from "../../global/Layout/Layout";
import date from "../../../utils/date";
import DetailText from "./DetailText/DetailText";
import { addAnswer, deletePost, getDetailPost } from "../../../utils/api/api";
import { useNavigate, useParams } from "react-router-dom";
import DefaultError from "../../global/Error/DefaultError";
import FormAnswer from "./FormAnswer/FormAnswer";
import DefaultModal from "../../global/Modal/DefaultModal";
import { Button } from "flowbite-react";
import ModalDelete from "../../global/Modal/ModalDelete";
import ScreenLoading from "../../global/Loading/ScreenLoading";
import category from "../../../utils/category";

const Detail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [answer, answerSet] = useState("");
  const [err, errSet] = useState([]);
  const [openModal, setOpenModal] = useState("");
  const [formAnswer, formAnswerSet] = useState(false);
  const [modalDelete, modalDeleteSet] = useState(false);

  const { posts, isError, isLoading } = getDetailPost(postId);

  // add answer
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addAnswer("Juniardi, Lc", answer, postId);
      if ((res.status = 200)) {
        setOpenModal("Berhasil mengirim jawaban");
      }
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      // errSet(error?.response?.message);
      console.log(error)
      setOpenModal(true);
    }
  };

  // delete question
  const handleDelete = async (e) => {
    try {
      const res = await deletePost(postId);
      if (res.status === 200) {
        setOpenModal("Berhasil menghapus pertanyaan");
      }
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      // errSet(error?.response?.data?.message);
      console.log(error)
    }
  };

  // text modal after add / delete
  let textModal =
    err?.length !== 0
      ? err?.map((e, i) => {
          return e.message;
        })
      : openModal;

  let loading = <ScreenLoading />;

  let success = (
    <div className="flex flex-col gap-y-14 py-10">
      <div className="flex flex-col w-full gap-4">
        <h1 className="text-3xl lg:text-5xl font-semibold">
          {posts?.data.title}
        </h1>
        <p className="text-gray-500 flex flex-col sm:flex-row gap-2 sm:gap-5">
          {posts?.data.category},{" "}
          <span>{date(posts?.data.created_at)}</span>
        </p>
      </div>
      <DetailText
        text={posts?.data.question}
        name={posts?.data.questioner}
        city={posts?.data.city}
      />
      {posts?.data.answer ? (
        <div className="flex flex-col gap-10">
          <DetailText
            question={false}
            text={posts?.data.answer}
            name={posts?.data.answered}
          />
          <Button type="button" outline onClick={() => modalDeleteSet(true)}>
            Hapus Pertanyaan
          </Button>
        </div>
      ) : formAnswer ? (
        <FormAnswer answerSet={answerSet} handleSubmit={handleSubmit} />
      ) : (
        <div className="w-full gap-5 flex">
          <Button
            outline
            className="w-full"
            onClick={() => {
              modalDeleteSet(true);
            }}
          >
            Hapus Pertanyaan
          </Button>
          <Button className="w-full" onClick={() => formAnswerSet(true)}>
            Jawab Pertanyaan
          </Button>
        </div>
      )}
    </div>
  );

  let error = <DefaultError message={err} />;

  return (
    <Layout>
      <DefaultModal
        error={err}
        text={textModal}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ModalDelete
        modalDelete={modalDelete}
        modalDeleteSet={modalDeleteSet}
        handleDelete={handleDelete}
      />

      <div>{isError ? error : isLoading ? loading : success}</div>
    </Layout>
  );
};

export default Detail;
