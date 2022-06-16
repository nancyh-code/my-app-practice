import useForm from '../hooks/useForm';

interface FormData {
  email: string;
  name: string;
  age: number;
}

const Form = () => {
  const { email, name, age, forms, handleChange } = useForm<FormData>({
    email: 'roxy@roxy.com',
    name: 'Roxie Reagan',
    age: 24,
  });

  //Se puede evitar la destructuración si se pasan en el objeto
  // const { email, name, age } = forms;

  // const [form, setForm] = useState({
  //   email: '',
  //   name: '',
  // });

  // // const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  return (
    <form autoComplete='off'>
      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input
          type='email'
          className='form-control'
          name='email'
          onChange={handleChange}
          value={email}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Name</label>
        <input
          type='text'
          className='form-control'
          name='name'
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Age</label>
        <input
          type='number'
          className='form-control'
          name='age'
          onChange={handleChange}
          value={age}
        />
      </div>

      <pre>{JSON.stringify(forms)}</pre>
    </form>
  );
};

export default Form;
