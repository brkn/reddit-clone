import "./AddLinkPage.scss";

import React, {
  useContext, useState
} from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { ReturnToListLink } from "../return-to-list-link/ReturnToListLink";
import { AppContext } from "../../store/context";
import { Types } from "../../store/reducers";

export function AddLinkPage() {
  const [
    linkNameValue,
    setLinkNameValue
  ] = useState("");
  const [
    linkUrlValue,
    setLinkUrlValue
  ] = useState("");
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  const nameId = "link-name";
  const urlId = "link-url";

  const handleLinkNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLinkNameValue(event.currentTarget.value);
  };

  const handleLinkUrlChange = (event: React.FormEvent<HTMLInputElement>) => {
    setLinkUrlValue(event.currentTarget.value);
  };

  const submitForm = (
    event: React.FormEvent<HTMLButtonElement | HTMLFormElement>
  ) => {
    event.preventDefault();

    dispatch({
      type: Types.Create,
      payload: {
        title: linkNameValue,
        url: linkUrlValue,
      },
    });
    toast.success(`${linkNameValue} is added`);
    history.push("/");
  };

  return (
    <main className={"add-link-page"}>
      <ReturnToListLink />

      <h2 className={"add-link-page-header"}>{"Add New Link"}</h2>

      <form
        className={"add-link-page-form"}
        onSubmit={submitForm}
      >
        <div className="input-wrapper name-input-wrapper">
          <label
            className="input-label name-input-label"
            htmlFor={nameId}
          >
            {"Link Name:"}
          </label>
          <input
            required={true}
            type="text"
            name={nameId}
            id={nameId}
            className={"input name-input"}
            placeholder={"e.g. Reddit"}
            value={linkNameValue}
            onChange={handleLinkNameChange}
            maxLength={20}
          />
        </div>

        <div className="input-wrapper url-input-wrapper">
          <label
            className="input-label url-input-label"
            htmlFor={urlId}
          >
            {"Link URL:"}
          </label>
          <input
            required={true}
            type="url"
            name={urlId}
            id={urlId}
            className={"input url-input"}
            placeholder={"e.g. https://www.hepsiburada.com/"}
            value={linkUrlValue}
            onChange={handleLinkUrlChange}
          />
        </div>

        <button
          className={"add-link-page-form-submit-button"}
          type="submit"
          onSubmit={submitForm}
        >
          {"ADD"}
        </button>
      </form>
    </main>
  );
}
