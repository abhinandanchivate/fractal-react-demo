import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
const emptyForm = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "", // comma-separated
  bio: "",
  githubusername: "",
  // social
  youtube: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  instagram: "",
};

const CreateProfile = () => {
  // decision to use it for create / edit profile
  const isCreate = Boolean(useMatch("/profile/create-profile"));
  // provided path and browser path matches or not.

  // create-profile ==> true ==> we will divide the form // 1. createprofile 2. editprofile

  const [formState, setFormState] = useState(emptyForm);
  const navigate = useNavigate();
  const profileSelector = useSelector((state) => state.profile);

  // destructuring the formstate
  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formState;
  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const showSocialInputs = (
    <>
      <div class="form-group social-input">
        <i class="fab fa-twitter fa-2x"></i>
        <input type="text" placeholder="Twitter URL" name="twitter" />
      </div>
      <div class="form-group social-input">
        <i class="fab fa-facebook fa-2x"></i>
        <input type="text" placeholder="Facebook URL" name="facebook" />
      </div>
      <div class="form-group social-input">
        <i class="fab fa-youtube fa-2x"></i>
        <input type="text" placeholder="YouTube URL" name="youtube" />
      </div>
      <div class="form-group social-input">
        <i class="fab fa-linkedin fa-2x"></i>
        <input type="text" placeholder="Linkedin URL" name="linkedin" />
      </div>
      <div class="form-group social-input">
        <i class="fab fa-instagram fa-2x"></i>
        <input type="text" placeholder="Instagram URL" name="instagram" />
      </div>
    </>
  );

  return (
    <>
      {" "}
      <section class="container">
        {isCreate ? (
          <h1 class="large text-primary"> Create Your Profile </h1>
        ) : (
          <h1 class="large text-primary"> Edit Your Profile </h1>
        )}
        <p class="lead">
          <i class="fas fa-user"></i> Let's get some information to make your
          profile stand out
        </p>
        <small>* = required field</small>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <select name="status" value={status} onChange={onChange}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small class="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={onChange}
            />
            <small class="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={onChange}
            />
            <small class="form-text">
              Could be your own or a company website
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
            <small class="form-text">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={onChange}
            />
            <small class="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              value={githubusername}
              onChange={onChange}
            />
            <small class="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div class="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={onChange}
            ></textarea>
            <small class="form-text">Tell us a little about yourself</small>
          </div>
          <div class="my-2">
            <button type="button" class="btn btn-light">
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          <input type="submit" class="btn btn-primary my-1" />
          <a class="btn btn-light my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </>
  );
};

export default CreateProfile;
