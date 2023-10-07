import React from 'react'

import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const Stats = () => {
  return (
    <div>
      <div className='col-md-12 my-3'>
        <h2 className='text-center'>Your Medicine</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark text-center">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <td>
                  <img src='data:image/jpeg;base64,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' alt='medicine'
                    style={{ maxWidth: '100%', maxHeight: '50px', objectFit: 'contain' }}
                  />
                </td>
                <td>
                  <p className="fw-normal mb-1">Pain Killer</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Pain Killer</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Pain Killer</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">Pain Killer</p>
                </td>
                <td>
                  <button className='btn btn-primary'><AiFillEdit size={25} /></button>
                  <button className='btn btn-danger m-2'><AiFillDelete size={25} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Stats