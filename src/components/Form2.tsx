import useForm from '../hooks/useForm';

const Form2 = () => {
  const { forms, handleChange } = useForm({
    zip: 'ABC',
    city: 'Ottawa',
  });

  const { zip, city } = forms;

  return (
    <form autoComplete='off'>
      <div className='mb-3'>
        <label className='form-label'>Zi</label>
        <input
          type='text'
          className='form-control'
          name='zip'
          value={zip}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>City</label>
        <input
          type='text'
          className='form-control'
          name='city'
          value={city}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(forms)}</pre>
    </form>
  );
};

export default Form2;
