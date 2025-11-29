# Docker Test App 🐳

A simple full-stack web application to demonstrate Docker containerization, featuring a React frontend and Node.js/Express backend.

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed and running
- Git (for cloning)

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/assiazeghmar/docker-test-app.git
   cd docker-test-app



## 🔄 CI/CD Pipeline

This project uses GitHub Actions for automated CI/CD:

### Pipeline Stages:
1. **Test & Build** - Builds Docker images and runs tests
2. **Security Scan** - Vulnerability scanning with Trivy
3. **Registry Push** - Pushes images to GitHub Container Registry
4. **Deploy** - Deploys to environments

### Workflow Triggers:
- **On Pull Request**: Runs tests and security scans
- **On Push to Main**: Full pipeline including deployment

### Viewing Pipeline:
- Go to **Actions** tab in GitHub repository
- See workflow runs and their status
- View logs and artifacts

### Manual Triggers:
You can also manually trigger the workflow from GitHub Actions tab.