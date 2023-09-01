import { useImmer } from 'use-immer';

const initialValue = {
  _id: '',
  name: '',
  slug: '',
  public: false,
  tracks: [],
  userId: {} || '',
};

export default function usePlaylistForm(initialState = initialValue) {
  const [form, setForm] = useImmer(initialState || initialValue);

  const handleNameChange = (e) => {
    setForm((form) => {
      form.name = e.target.value;
    });
  };

  const handlePublicChange = (e) => {
    setForm((form) => {
      form.public = e.target.checked;
    });
  };

  const setFormByField = (field, value) => {
    setForm((form) => {
      form[field] = value;
    });
  };

  const setAllForms = (data) => {
    if (!data) return;
    setForm((form) => {
      form._id = data._id;
      form.name = data.name;
      form.slug = data.slug;
      form.public = data.public;
      form.tracks = data.tracks;
      form.userId = data.userId;
    });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return {
    form,
    setAllForms,
    handleNameChange,
    handlePublicChange,
    setFormByField,
    resetForm,
  };
}
