import { Router, Route, Redirect, Switch } from "wouter-preact"
import { ErrorBoundary, Layout, Link, NavLink } from "./_components"
import { Chat } from "./chat/Chat"
import { QuickTools } from "./quick-tools/QuickTools"
import { Playground } from "./playground/Playground"
import { Settings } from "./settings/Settings"
import { Dropdown } from "./_components/Dropdown"

export const App = () => (
  <ErrorBoundary>
    <Router>
      <Layout class="vh-100 bg-body-tertiary">
        <AppBar />

        <Layout scroll>
          <Switch>
            <Route path="/chat/:id?" component={Chat} />
            <Route path="/quick-tools/:id?" component={QuickTools} />
            <Route path="/playground" component={Playground} />
            <Route path="/settings" component={Settings} />
            <Redirect href="/chat" />
          </Switch>
        </Layout>
      </Layout>
    </Router>
  </ErrorBoundary>
)

const AppBar = () => (
  <header class="navbar navbar-expand bg-primary navbar-dark">
    <div class="container">
      <Link class="navbar-brand" href="/">
        Ava
      </Link>

      <div class="navbar-collapse d-print-none">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <NavLink class="nav-link" href="/chat">
              Chat
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" href="/quick-tools">
              Quick Tools
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" href="/playground">
              Playground
            </NavLink>
          </li>
        </ul>

        <BuyButton />

        <ModelMenu />
      </div>
    </div>
  </header>
)

const BuyButton = () => (
  <a class="btn btn-warning d-md-inline-block me-2" href="https://avapls.com/buy" target="_blank">
    Buy License
  </a>
)

const ModelMenu = () => (
  <ul class="navbar-nav">
    <Dropdown component="li" class="nav-item">
      <button class="btn btn-link nav-link dropdown-toggle" data-bs-toggle="dropdown">
        wizardlm-13b-v1.2
      </button>

      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="">
            llama-2-13b
          </a>
        </li>

        <li class="dropdown-divider"></li>

        <li>
          <a class="dropdown-item" href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </Dropdown>
  </ul>
)
