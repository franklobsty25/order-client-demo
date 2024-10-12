import { Container, Stack } from 'react-bootstrap';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import dayjs from 'dayjs';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Container fluid className="min-vh-100">
        <Header />
        <Stack
          id="intro-box"
          direction="horizontal"
          className="justify-content-between align-items-start px-3 my-5"
        >
          <div>
            {user && <h4>Welcome, {user?.firstname || ''}!</h4>}
            <p className="fw-lighter">
              Start your day by checking today's task and updates
            </p>
          </div>
          <div>
            <Stack direction="horizontal" gap={3}>
              <span className="intro-text calender-box text-primary fw-bold px-4 py-3 rounded-4">
                <img src="src/assets/calender.svg" width="20" />
                &nbsp;&nbsp;{dayjs().format('MMMM D, YY')}
              </span>
              <img
                src="src/assets/user.svg"
                width="50"
                className="rounded-circle border"
              />
              <div>
                {user && (
                  <p className="fw-semibold intro-text">
                    {user?.firstname} {user?.lastname}
                  </p>
                )}
                {user && (
                  <p className="intro-text text-secondary">{user?.email}</p>
                )}
              </div>
              <span>
                <img src="" width="20" />
              </span>
            </Stack>
          </div>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default Dashboard;
