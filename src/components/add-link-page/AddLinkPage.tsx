import "./AddLinkPage.scss";

import React, {
  useContext, useState
} from "react";

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
  /* const { dispatch } = useContext(AppContext); */

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

    console.log(linkNameValue, linkUrlValue);
  };

  return (
    <main className={"add-link-page"}>
      <ReturnToListLink />

      <h2 className={"add-link-page-header"}>{"Add New Link"}</h2>

      <form onSubmit={submitForm}>
        <div className="input-wrapper name-input-wrapper">
          <label
            htmlFor={nameId}
            className="name-input-label"
          >
            {"Link Name:"}
          </label>
          <input
            required={true}
            type="text"
            name={nameId}
            id={nameId}
            className={"name-input"}
            placeholder={"e.g. Reddit"}
            value={linkNameValue}
            onChange={handleLinkNameChange}
            maxLength={20}
          />
        </div>

        <div className="input-wrapper url-input-wrapper">
          <label
            htmlFor={urlId}
            className="url-input-label"
          >
            {"Link URL:"}
          </label>
          <input
            required={true}
            type="url"
            name={urlId}
            id={urlId}
            className={"url-input"}
            placeholder={"e.g. https://www.hepsiburada.com/"}
            value={linkUrlValue}
            onChange={handleLinkUrlChange}
          />

          <button
            type="submit"
            onSubmit={submitForm}
          >
            {"ADD"}
          </button>
        </div>
      </form>
    </main>
  );
}
