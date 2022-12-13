  if (status_type == 3) {
    // APPROVED
    filter = {
      approved_by_id: { [Sequelize.Op.ne]: null },
      approved2_by_id: { [Sequelize.Op.ne]: null },
    };
  } else {  
    // APPROVED BY
    if (status_type == 2) {
      filter = {
        approved_by_id: { [Sequelize.Op.ne]: null },
        approved2_by_id: { [Sequelize.Op.is]: null },
      };
    } else {
      // PENDING
      if (status_type == 1) {
        filter = {
          approved_by_id: { [Sequelize.Op.is]: null },
          approved2_by_id: { [Sequelize.Op.is]: null },
        };
      } else {
        filter = {};
      }
    }
  }
