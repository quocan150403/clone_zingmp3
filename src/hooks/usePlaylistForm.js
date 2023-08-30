import { useImmer } from 'use-immer';

const initialValue = {
  name: '',
  public: false,
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

  const handleUpdateAll = (data) => {
    if (!data) return;
    setForm((form) => {
      form.name = data.name;
      form.public = data.public;
    });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return {
    form,
    handleNameChange,
    handlePublicChange,
    handleUpdateAll,
    resetForm,
  };
}
