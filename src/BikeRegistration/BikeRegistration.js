import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import React, { useContext } from 'react'
import { CompanyContext } from '../CompanyContext/CompanyContext'
import Navbar from '../NavbarComponent/Navbar'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '50ch',
      display: 'flex',
      flexDirection: 'row'
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

const BikeRegistration = () => {
  const classes = useStyles()

  const { company } = useContext(CompanyContext)
  const [companies] = company

  const [item, setItem] = React.useState({
    bikeType: '',
    brandName: '',
    bikeDescription: '',
    keyFeatures: '',
    price: '',
    specifications: '',
    companyId: ''
  })
  
  const handleChange = event => {
    const target = event.target
    const value = target.value
    setItem({ ...item, [event.target.name]: value })
  }
  const handleSubmit = async event => {
    event.preventDefault()
    const item1 = { ...item }
    try {
      axios.post(`http://localhost:3001/api/bike`, item1)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <React.Fragment>
      <Navbar />

      <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container justify='center'>
          <Grid item xs={6} sm={6} lg={6} xl={12}>
            <TextField
              label='Brand Name'
              placeholder={'Enter the Brand Name'}
              name='brandName'
              value={item.brandName}
              onChange={handleChange}
            />
            <TextField
              type='text'
              label='Bike Type'
              name='bikeType'
              placeholder={'Enter the Bike Type'}
              onChange={handleChange}
              value={item.bikeType}
            />
            <TextField
              type='text'
              name='bikeDescription'
              label='Bike Description'
              placeholder={'Enter the Bike Descriptions'}
              onChange={handleChange}
              value={item.bikeDescription}
            />
          </Grid>
          <Grid item xs={6} sm={6} lg={6} xl={12}>
            <TextField
              label='Key Features'
              placeholder={'Enter the Key Features'}
              name='keyFeatures'
              value={item.keyFeatures}
              onChange={handleChange}
            />
            <TextField
              type='text'
              label='Bike Price'
              name='price'
              placeholder={'Enter the Price For The Bike'}
              value={item.price}
              onChange={handleChange}
            />
            <TextField
              type='text'
              label='Specifications'
              name='specifications'
              placeholder={'Enter the Bike Specifications'}
              onChange={handleChange}
              value={item.specifications}
            />
            <TextField
              select
              label='Select'
              onChange={handleChange}
              helperText='Please select your bike Type'
              variant='filled'
              value={item.companyId}
              name='companyId'
            >
              {companies.map(option => (
                <MenuItem key={option._id} name='companyId' value={option._id}>
                  {option.companyName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          style={{ width: '100px' }}
        >
          Register
        </Button>
      </form>
    </React.Fragment>
  )
}

export default BikeRegistration
